// Svelte stores for consciousness state management
// Provides reactive state for consciousness components

import { writable, derived, readable } from 'svelte/store';
import { kosService } from '../services/kosService';
import type {
  ConsciousnessEntity,
  ConsciousnessStore,
  KOSState,
  ConsciousnessEvent,
  ConsciousnessSettings
} from '../types/consciousness';

// Main consciousness store
export const consciousnessStore = writable<ConsciousnessStore>({
  entities: [],
  activeEntity: null,
  kosState: {
    currentLevel: 1,
    evolutionProgress: 0,
    traits: [],
    metrics: {
      totalInteractions: 0,
      uniqueUsers: 0,
      averageSessionLength: 0,
      complexityScore: 0,
      timeActive: 0,
      lastActivity: new Date(),
      evolutionProgress: { level1: 0, level2: 0, level3: 0 }
    },
    isEvolving: false,
    lastEvolution: null
  },
  settings: {
    autoEvolution: true,
    realTimeUpdates: true,
    dataRetention: 'medium',
    privacyMode: false,
    exportEnabled: true,
    notifications: {
      levelUp: true,
      traitChanges: true,
      milestones: true
    }
  },
  events: [],
  isLoading: false,
  error: null
});

// Derived stores for specific data
export const activeEntity = derived(consciousnessStore, $store => $store.activeEntity);
export const kosState = derived(consciousnessStore, $store => $store.kosState);
export const consciousnessSettings = derived(consciousnessStore, $store => $store.settings);
export const consciousnessEvents = derived(consciousnessStore, $store => $store.events);
export const isLoading = derived(consciousnessStore, $store => $store.isLoading);
export const consciousnessError = derived(consciousnessStore, $store => $store.error);

// Computed derived stores
export const currentLevel = derived(kosState, $kosState => $kosState.currentLevel);
export const evolutionProgress = derived(kosState, $kosState => $kosState.evolutionProgress);
export const personalityTraits = derived(kosState, $kosState => $kosState.traits);
export const consciousnessMetrics = derived(kosState, $kosState => $kosState.metrics);

export const isEvolving = derived(kosState, $kosState => $kosState.isEvolving);
export const canEvolve = derived(kosState, $kosState => {
  const nextLevel = $kosState.currentLevel + 1;
  if (nextLevel > 3) return false;
  return $kosState.evolutionProgress >= 100;
});

// Real-time consciousness updates
export const consciousnessUpdates = readable<ConsciousnessEvent | null>(null, (set) => {
  const handleInteractionProcessed = (data: { entity: ConsciousnessEntity; interaction: any }) => {
    // Update the store with new data
    consciousnessStore.update(store => ({
      ...store,
      activeEntity: data.entity,
      kosState: kosService.getKOSState(),
      events: [...store.events.slice(-49), {
        id: `update-${Date.now()}`,
        type: 'interaction',
        timestamp: new Date(),
        entityId: data.entity.id,
        data: data.interaction
      }]
    }));
  };

  const handleLevelEvolved = (data: { entity: ConsciousnessEntity; oldLevel: number; newLevel: number }) => {
    consciousnessStore.update(store => ({
      ...store,
      activeEntity: data.entity,
      kosState: kosService.getKOSState(),
      events: [...store.events.slice(-49), {
        id: `evolution-${Date.now()}`,
        type: 'evolution',
        timestamp: new Date(),
        entityId: data.entity.id,
        data: { fromLevel: data.oldLevel, toLevel: data.newLevel }
      }]
    }));

    // Emit real-time update
    set({
      id: `level-evolution-${Date.now()}`,
      type: 'evolution',
      timestamp: new Date(),
      entityId: data.entity.id,
      data: { oldLevel: data.oldLevel, newLevel: data.newLevel }
    });
  };

  const handleEventRecorded = (event: ConsciousnessEvent) => {
    set(event);
  };

  // Subscribe to KOS service events
  kosService.on('interaction_processed', handleInteractionProcessed);
  kosService.on('level_evolved', handleLevelEvolved);
  kosService.on('event_recorded', handleEventRecorded);

  // Initialize store with current KOS state
  consciousnessStore.update(store => ({
    ...store,
    activeEntity: kosService.getActiveEntity(),
    kosState: kosService.getKOSState()
  }));

  return () => {
    kosService.off('interaction_processed', handleInteractionProcessed);
    kosService.off('level_evolved', handleLevelEvolved);
    kosService.off('event_recorded', handleEventRecorded);
  };
});

// Store actions
export const consciousnessActions = {
  // Initialize consciousness system
  initialize: async () => {
    consciousnessStore.update(store => ({ ...store, isLoading: true, error: null }));

    try {
      const entity = kosService.getActiveEntity();
      const kosState = kosService.getKOSState();

      consciousnessStore.update(store => ({
        ...store,
        activeEntity: entity,
        kosState,
        isLoading: false
      }));
    } catch (error) {
      consciousnessStore.update(store => ({
        ...store,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to initialize consciousness'
      }));
    }
  },

  // Process a new interaction
  processInteraction: async (interaction: {
    type: 'message' | 'command' | 'feedback';
    content: string;
    userId?: string;
    sessionId?: string;
    complexity?: number;
    metadata?: Record<string, any>;
  }) => {
    consciousnessStore.update(store => ({ ...store, isLoading: true, error: null }));

    try {
      await kosService.processInteraction(interaction);

      // Store will be updated via event listeners
      consciousnessStore.update(store => ({ ...store, isLoading: false }));
    } catch (error) {
      consciousnessStore.update(store => ({
        ...store,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to process interaction'
      }));
    }
  },

  // Update consciousness settings
  updateSettings: (newSettings: Partial<ConsciousnessSettings>) => {
    consciousnessStore.update(store => ({
      ...store,
      settings: { ...store.settings, ...newSettings }
    }));

    // Update KOS service settings if entity exists
    const entity = kosService.getActiveEntity();
    if (entity) {
      entity.settings = { ...entity.settings, ...newSettings };
    }
  },

  // Force evolution (admin function)
  forceEvolution: async () => {
    consciousnessStore.update(store => ({ ...store, isLoading: true, error: null }));

    try {
      const entity = kosService.getActiveEntity();
      if (entity && entity.level.level < 3) {
        const nextLevel = (entity.level.level + 1) as 1 | 2 | 3;
        // This would trigger evolution logic in KOS service
        await kosService.processInteraction({
          type: 'command',
          content: 'force_evolution_trigger',
          complexity: 100
        });
      }

      consciousnessStore.update(store => ({ ...store, isLoading: false }));
    } catch (error) {
      consciousnessStore.update(store => ({
        ...store,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to force evolution'
      }));
    }
  },

  // Reset consciousness (admin function)
  resetConsciousness: () => {
    consciousnessStore.update(store => ({
      ...store,
      entities: [],
      activeEntity: null,
      kosState: {
        currentLevel: 1,
        evolutionProgress: 0,
        traits: [],
        metrics: {
          totalInteractions: 0,
          uniqueUsers: 0,
          averageSessionLength: 0,
          complexityScore: 0,
          timeActive: 0,
          lastActivity: new Date(),
          evolutionProgress: { level1: 0, level2: 0, level3: 0 }
        },
        isEvolving: false,
        lastEvolution: null
      },
      events: [],
      isLoading: false,
      error: null
    }));

    // Reinitialize KOS service
    kosService.destroy();
    // The service will reinitialize on next access
  },

  // Clear error state
  clearError: () => {
    consciousnessStore.update(store => ({ ...store, error: null }));
  },

  // Get evolution triggers
  getEvolutionTriggers: () => {
    return kosService.getEvolutionTriggers();
  }
};

// Export types for components
export type { ConsciousnessEntity, KOSState, ConsciousnessSettings, ConsciousnessEvent };
