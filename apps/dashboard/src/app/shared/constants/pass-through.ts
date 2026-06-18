export const DASHBOARD_CAROUSEL_PT = {
  contentContainer: {
    class: 'h-full relative',
  },
  content: {
    class: 'h-full',
  },
  viewport: {
    class: 'h-full',
  },
  itemList: {
    class: 'h-full',
  },
  indicatorList: {
    class: 'gap-2! mt-6! justify-start! py-3!',
  },
  indicator: {
    class: 'group',
  },
  indicatorButton: {
    class:
      'size-3! rounded-full! bg-maroon-50! group-[.p-carousel-indicator-active]:bg-maroon-700!',
  },
  pcPrevButton: {
    root: {
      class:
        'border! border-maroon-200! text-maroon-700! absolute! bottom-0 end-11 size-8! z-1 rtl:end-1',
    },
  },
  pcNextButton: {
    root: {
      class:
        'border! border-maroon-200! text-maroon-700! absolute! bottom-0 end-1 size-8! z-1 rtl:end-11',
    },
  },
};

export const DIALOG_PT = {
  root: {
    class: '!bg-white !p-6 !rounded-2xl',
  },
  mask: {
    class: '!bg-black/50',
  },
};

export const PAGINATOR_CLASS =
  'p-2! border! dark:border-none! border-zinc-100! rounded-lg! size-8! bg-white! dark:bg-zinc-700!';
export const PAGINATOR_PT = {
  root: {
    class: 'gap-1!',
  },
  pages: {
    class: 'gap-1!',
  },
  first: {
    class: PAGINATOR_CLASS,
  },
  prev: {
    class: PAGINATOR_CLASS,
  },
  page: {
    class:
      PAGINATOR_CLASS +
      ' aria-[current]:border-none! aria-[current]:bg-maroon-600! dark:aria-[current]:bg-soft-pink-300! aria-[current]:text-white! dark:aria-[current]:text-zinc-700!',
  },
  next: {
    class: PAGINATOR_CLASS,
  },
  last: {
    class: PAGINATOR_CLASS,
  },
};
