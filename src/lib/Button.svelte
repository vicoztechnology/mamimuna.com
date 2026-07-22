<!-- src/lib/components/Button.svelte -->
<script>
  // Mengambil props menggunakan Runes Svelte 5 ($props)
  let { 
    children,               // Untuk menerima konten di dalam tag <Button>isi</Button>
    variant = 'primary',    // Pilihan: primary, secondary, danger, outline
    size = 'md',            // Pilihan: sm, md, lg
    type = 'button',        // Tipe button HTML: button, submit, reset
    onclick,                // Fungsi event handler saat tombol diklik
    ...restProps            // Menampung atribut tambahan lain (misal: disabled, class)
  } = $props();

  // Pemetaan varian warna Tailwind
  const variants = {
    primary: 'bg-primary hover:bg-blue-700 text-on-primary focus:ring-blue-500 shadow-sm',
    secondary: 'bg-slate-600 hover:bg-slate-700 text-white focus:ring-slate-500 shadow-sm',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 shadow-sm',
    outline: 'border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-50 focus:ring-slate-500'
  };

  // Pemetaan ukuran tombol
  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs rounded-full',
    sm: 'px-3.5 py-2.5 text-xs rounded-full',
    md: 'px-4 py-3.5 text-sm rounded-full',
    lg: 'px-9 py-5.5 text-base rounded-full',
    xl: 'px-13 py-8.5 text-base rounded-full',
  };

  const colors = {
    
  };
</script>

<button
  {type}
  {onclick}
  class="inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none {variants[variant]} {sizes[size]}"
  {...restProps}
>
  <!-- {@render children()} adalah sintaks Svelte 5 untuk menampilkan konten di dalam komponen -->
  {#if children}
    {@render children()}
  {/if}
</button>
