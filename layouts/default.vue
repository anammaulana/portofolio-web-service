<template>
  <div class="min-h-screen bg-paper text-ink transition-colors dark:bg-[#14161a] dark:text-white">
    <AppStructuredData />
    <AppHeader />
    <main id="main-content">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
