<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="sidebar-header">
        <svg class="logo-mark" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="22" stroke="#1a1d24" stroke-width="1"/>
          <rect x="5" y="5" width="14" height="14" stroke="#1a1d24" stroke-width="0.75"/>
          <line x1="12" y1="1" x2="12" y2="23" stroke="#1a1d24" stroke-width="0.5"/>
        </svg>
        <span class="logo-text">Demo</span>
      </div>

      <nav class="sidebar-nav">
        <span class="nav-label">MENU</span>
        <RouterLink to="/cars" class="nav-item" :class="{ active: route.path === '/cars' }">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l3-4h12l3 4h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"/>
            <circle cx="7.5" cy="17" r="2.5"/><circle cx="16.5" cy="17" r="2.5"/>
          </svg>
          <span>Cars</span>
        </RouterLink>
      </nav>

    </aside>

    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,400;0,500;1,400&family=DM+Mono:wght@300;400&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #f7f6f3;
  color: #1a1d24;
  font-family: 'DM Mono', monospace;
  font-weight: 300;
}
</style>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

/* ── Sidebar ── */
.sidebar {
  width: 220px;
  min-height: 100vh;
  background: #f7f6f3;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
}


/* ── Header ── */
.sidebar-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 28px 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.logo-mark {
  flex-shrink: 0;
  opacity: 0.85;
}

.logo-text {
  font-family: 'Cormorant', serif;
  font-style: italic;
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 0.02em;
  color: #1a1d24;
}

/* ── Nav ── */
.sidebar-nav {
  padding: 24px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.nav-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #aaa9a5;
  padding: 0 6px;
  margin-bottom: 6px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 4px;
  text-decoration: none;
  color: #7a7974;
  font-family: 'DM Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.04em;
  transition: color 0.15s, background 0.15s;
  position: relative;
}

.nav-item:hover {
  color: #1a1d24;
  background: #eeeff1;
}

.nav-item.active {
  color: #1a1d24;
  background: #e5e7eb;
}

.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0; top: 50%;
  transform: translateY(-50%);
  width: 2px; height: 60%;
  background: #1a1d24;
  border-radius: 0 2px 2px 0;
}


/* ── Content ── */
.content {
  flex: 1;
  padding: 40px;
}
</style>
