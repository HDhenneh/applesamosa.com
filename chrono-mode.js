/**
 * Chrono Mode JavaScript Implementation
 * Time-aware color theme system with auto-detection and manual controls
 */

class ChronoTheme {
    constructor() {
        this.phases = {
            dawn: {
                name: 'Dawn',
                hours: [5, 6],
                icon: '🌅',
                description: 'Soft pastels, gentle awakening'
            },
            morning: {
                name: 'Morning',
                hours: [7, 8, 9, 10],
                icon: '☀️',
                description: 'Bright, energizing'
            },
            midday: {
                name: 'Midday',
                hours: [11, 12, 13],
                icon: '🌞',
                description: 'Strong, confident daylight'
            },
            afternoon: {
                name: 'Afternoon',
                hours: [14, 15, 16],
                icon: '🌤️',
                description: 'Warm, golden hour'
            },
            dusk: {
                name: 'Dusk',
                hours: [17, 18, 19],
                icon: '🌆',
                description: 'Softening, calming'
            },
            evening: {
                name: 'Evening',
                hours: [20, 21, 22],
                icon: '🌙',
                description: 'Deep, rich twilight'
            },
            night: {
                name: 'Night',
                hours: [23, 0, 1],
                icon: '🌑',
                description: 'Dark, sleep-friendly'
            },
            latenight: {
                name: 'Late Night',
                hours: [2, 3, 4],
                icon: '✨',
                description: 'Ultra-dark, minimal'
            }
        };

        this.currentPhase = null;
        this.autoMode = true;
        this.updateInterval = null;
        this.init();
    }

    init() {
        // Load saved preferences
        this.loadPreferences();

        // Create control panel
        this.createControlPanel();

        // Initial update
        this.update();

        // Start auto updates
        if (this.autoMode) {
            this.startAutoUpdates();
        }
    }

    getCurrentPhase() {
        const hour = new Date().getHours();

        for (const [phaseKey, phaseData] of Object.entries(this.phases)) {
            if (phaseData.hours.includes(hour)) {
                return { key: phaseKey, ...phaseData };
            }
        }

        // Default to night if something goes wrong
        return { key: 'night', ...this.phases.night };
    }

    applyPhase(phaseKey) {
        const body = document.body;
        const phaseData = this.phases[phaseKey];

        // Remove all phase classes
        Object.keys(this.phases).forEach(key => {
            body.classList.remove(`chrono-${key}`);
        });

        // Add current phase class
        body.classList.add(`chrono-${phaseKey}`);

        // Update current phase
        this.currentPhase = phaseKey;

        // Update control panel
        this.updateControlPanel(phaseKey, phaseData);
    }

    update() {
        if (!this.autoMode) return;

        const phase = this.getCurrentPhase();
        this.applyPhase(phase.key);
    }

    startAutoUpdates() {
        // Update every minute
        this.updateInterval = setInterval(() => {
            this.update();
        }, 60000); // 1 minute
    }

    stopAutoUpdates() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    setPhase(phaseKey) {
        this.autoMode = false;
        this.stopAutoUpdates();
        this.applyPhase(phaseKey);
        this.savePreferences();
    }

    setAutoMode(enabled) {
        this.autoMode = enabled;

        if (enabled) {
            this.startAutoUpdates();
            this.update();
        } else {
            this.stopAutoUpdates();
        }

        this.savePreferences();
    }

    createControlPanel() {
        const panel = document.createElement('div');
        panel.className = 'chrono-control-panel';
        panel.innerHTML = `
            <h3>
                <span>🎨</span>
                <span>Chrono Mode</span>
            </h3>
            <div class="chrono-time-display" id="chronoTime"></div>
            <div class="chrono-current-phase" id="chronoPhase"></div>
            <div class="chrono-phase-selector"></div>
            <div class="chrono-auto-toggle">
                <input type="checkbox" id="chronoAutoToggle" ${this.autoMode ? 'checked' : ''}>
                <label for="chronoAutoToggle">Auto-detect time</label>
            </div>
        `;

        document.body.appendChild(panel);

        // Create phase buttons
        const selector = panel.querySelector('.chrono-phase-selector');
        Object.entries(this.phases).forEach(([key, phase]) => {
            const btn = document.createElement('button');
            btn.className = 'chrono-phase-btn';
            btn.innerHTML = `${phase.icon} ${phase.name}`;
            btn.dataset.phase = key;
            btn.addEventListener('click', () => this.setPhase(key));
            selector.appendChild(btn);
        });

        // Auto toggle
        const toggle = panel.querySelector('#chronoAutoToggle');
        toggle.addEventListener('change', (e) => this.setAutoMode(e.target.checked));

        // Time display update
        this.updateTimeDisplay();
        setInterval(() => this.updateTimeDisplay(), 1000);
    }

    updateControlPanel(phaseKey, phaseData) {
        // Update phase display
        const phaseDisplay = document.getElementById('chronoPhase');
        if (phaseDisplay) {
            phaseDisplay.textContent = `${phaseData.icon} ${phaseData.name} - ${phaseData.description}`;
        }

        // Update active button
        document.querySelectorAll('.chrono-phase-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.phase === phaseKey);
        });
    }

    updateTimeDisplay() {
        const now = new Date();
        const timeDisplay = document.getElementById('chronoTime');
        if (timeDisplay) {
            timeDisplay.textContent = now.toLocaleTimeString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
        }
    }

    savePreferences() {
        const preferences = {
            phase: this.currentPhase,
            autoMode: this.autoMode
        };
        localStorage.setItem('chronoPreferences', JSON.stringify(preferences));
    }

    loadPreferences() {
        try {
            const saved = localStorage.getItem('chronoPreferences');
            if (saved) {
                const preferences = JSON.parse(saved);
                this.currentPhase = preferences.phase;
                this.autoMode = preferences.autoMode !== false; // Default to true
            }
        } catch (e) {
            console.warn('Could not load chrono preferences:', e);
        }
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.chronoTheme = new ChronoTheme();
    });
} else {
    window.chronoTheme = new ChronoTheme();
}

// Export for manual control
window.chronoTheme = window.chronoTheme || new ChronoTheme();
