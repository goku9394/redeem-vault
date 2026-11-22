function loadSession() {
      const now = Date.now();
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}

      return {
        expiresAt: now + CONFIG.durationMs,
        step: 1,
        unlocked: false,
        code: CONFIG.fallbackCode,
        ans1: "",
        ans2: "",
        pickedSeq: []
      };
    }

    function saveSession(_data) {
      // Har open/refresh par fresh start ke liye localStorage mein save nahi kar rahe
    }