<script setup lang="ts">
import { buildQuoteMessage, buildWhatsAppHref, validateQuoteForm, type QuoteFormState } from '~/utils/quote'

const config = useRuntimeConfig()
const startedAt = ref(Date.now())
const submitted = ref(false)
const spamBlocked = ref(false)
const generatedMessage = ref('')
const errors = ref<Partial<Record<keyof QuoteFormState, string>>>({})
const honeypot = ref('')
const form = reactive<QuoteFormState>({
  name: '',
  businessType: '',
  projectNeed: '',
  budgetRange: '',
  timeline: '',
  websiteUrl: ''
})

const whatsappNumber = computed(() => String(config.public.whatsappNumber || '').trim())
const whatsappHref = computed(() => buildWhatsAppHref(whatsappNumber.value, generatedMessage.value))

const submit = () => {
  submitted.value = false
  spamBlocked.value = false
  errors.value = validateQuoteForm(form)

  const elapsedMs = Date.now() - startedAt.value
  if (honeypot.value || elapsedMs < 800) {
    spamBlocked.value = true
    return
  }

  if (Object.keys(errors.value).length > 0) return

  generatedMessage.value = buildQuoteMessage(form)
  submitted.value = true

  if (whatsappHref.value) {
    window.location.href = whatsappHref.value
  }
}
</script>

<template>
  <form class="panel-surface rounded-lg p-6" novalidate @submit.prevent="submit">
    <div>
      <h2 class="text-xl font-semibold text-ink dark:text-white">Request quote</h2>
      <p class="mt-3 text-sm leading-6 muted-copy">
        Isi kebutuhan awal. Website tidak menyimpan submission ke database; pesan hanya disiapkan untuk WhatsApp.
      </p>
    </div>

    <div class="mt-6 hidden" aria-hidden="true">
      <label>
        Website company
        <input v-model="honeypot" name="company" tabindex="-1" autocomplete="off">
      </label>
    </div>

    <div class="mt-6 grid gap-5">
      <label class="grid gap-2">
        <span class="text-sm font-semibold text-ink dark:text-white">Nama</span>
        <input
          v-model="form.name"
          class="min-h-11 rounded-md border border-line bg-white px-3 text-ink dark:border-white/15 dark:bg-[#101317] dark:text-white"
          name="name"
          autocomplete="name"
        >
        <span v-if="errors.name" class="text-sm text-copper dark:text-[#f1a37f]">{{ errors.name }}</span>
      </label>

      <label class="grid gap-2">
        <span class="text-sm font-semibold text-ink dark:text-white">Tipe bisnis</span>
        <input
          v-model="form.businessType"
          class="min-h-11 rounded-md border border-line bg-white px-3 text-ink dark:border-white/15 dark:bg-[#101317] dark:text-white"
          name="businessType"
          placeholder="Contoh: UMKM, jasa profesional, sekolah, personal brand"
        >
        <span v-if="errors.businessType" class="text-sm text-copper dark:text-[#f1a37f]">{{ errors.businessType }}</span>
      </label>

      <label class="grid gap-2">
        <span class="text-sm font-semibold text-ink dark:text-white">Kebutuhan website</span>
        <textarea
          v-model="form.projectNeed"
          class="min-h-32 rounded-md border border-line bg-white px-3 py-3 text-ink dark:border-white/15 dark:bg-[#101317] dark:text-white"
          name="projectNeed"
          placeholder="Ceritakan halaman, fitur, atau masalah utama yang ingin diselesaikan."
        />
        <span v-if="errors.projectNeed" class="text-sm text-copper dark:text-[#f1a37f]">{{ errors.projectNeed }}</span>
      </label>

      <div class="grid gap-5 sm:grid-cols-2">
        <label class="grid gap-2">
          <span class="text-sm font-semibold text-ink dark:text-white">Estimasi budget</span>
          <select
            v-model="form.budgetRange"
            class="min-h-11 rounded-md border border-line bg-white px-3 text-ink dark:border-white/15 dark:bg-[#101317] dark:text-white"
            name="budgetRange"
          >
            <option value="">Pilih budget</option>
            <option>Rp3.500.000 - Rp7.500.000</option>
            <option>Rp7.500.000 - Rp12.500.000</option>
            <option>Di atas Rp12.500.000</option>
            <option>Butuh diskusi dulu</option>
          </select>
          <span v-if="errors.budgetRange" class="text-sm text-copper dark:text-[#f1a37f]">{{ errors.budgetRange }}</span>
        </label>

        <label class="grid gap-2">
          <span class="text-sm font-semibold text-ink dark:text-white">Timeline</span>
          <select
            v-model="form.timeline"
            class="min-h-11 rounded-md border border-line bg-white px-3 text-ink dark:border-white/15 dark:bg-[#101317] dark:text-white"
            name="timeline"
          >
            <option value="">Pilih timeline</option>
            <option>1-2 minggu</option>
            <option>3-4 minggu</option>
            <option>Lebih dari 1 bulan</option>
            <option>Masih fleksibel</option>
          </select>
          <span v-if="errors.timeline" class="text-sm text-copper dark:text-[#f1a37f]">{{ errors.timeline }}</span>
        </label>
      </div>

      <label class="grid gap-2">
        <span class="text-sm font-semibold text-ink dark:text-white">Website saat ini (opsional)</span>
        <input
          v-model="form.websiteUrl"
          class="min-h-11 rounded-md border border-line bg-white px-3 text-ink dark:border-white/15 dark:bg-[#101317] dark:text-white"
          name="websiteUrl"
          placeholder="https://..."
        >
      </label>
    </div>

    <button
      type="submit"
      class="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:bg-ink/88 dark:bg-white dark:text-[#14161a] dark:hover:bg-white/88"
    >
      Buat pesan WhatsApp
    </button>

    <p v-if="spamBlocked" class="mt-4 rounded-md border border-copper/30 bg-paper p-3 text-sm text-ink/74 dark:bg-[#101317] dark:text-white/80">
      Submission ditahan oleh spam guard. Coba isi form secara normal.
    </p>

    <div v-if="submitted" class="mt-5 rounded-md border border-line bg-paper p-4 dark:border-white/15 dark:bg-[#101317]">
      <p class="text-sm font-semibold text-ink dark:text-white">
        {{ whatsappHref ? 'Membuka WhatsApp...' : 'Nomor WhatsApp belum dikonfigurasi.' }}
      </p>
      <p class="mt-2 text-sm leading-6 muted-copy">
        Jika WhatsApp belum terbuka, gunakan pesan berikut saat nomor publik sudah tersedia.
      </p>
      <textarea
        class="mt-3 min-h-40 w-full rounded-md border border-line bg-white p-3 text-sm text-ink dark:border-white/15 dark:bg-[#182027] dark:text-white"
        readonly
        :value="generatedMessage"
        aria-label="Pesan WhatsApp yang dibuat"
      />
      <a
        v-if="whatsappHref"
        class="mt-3 inline-flex text-sm font-semibold text-ocean dark:text-[#89c7dc]"
        :href="whatsappHref"
      >
        Buka WhatsApp manual
      </a>
    </div>
  </form>
</template>
