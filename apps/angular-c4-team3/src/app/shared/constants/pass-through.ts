export const CONFIRM_DIALOG_PT = {
  root: {
    class: 'bg-white! p-6! rounded-2xl! shadow-sm! gap-20!',
    root: {
      class: 'bg-white! p-6! rounded-2xl! shadow-sm! gap-20!',
    },
  },
  mask: {
    class: 'bg-black/50!',
  },
  content: {
    class: 'text-xl! font-semibold! text-zinc-800! mb-4!',
  },
  footer: {
    class: 'gap-2.5!',
  },
  pcAcceptButton: {
    host: {
      class: 'w-full!',
    },
    root: {
      class: 'bg-red-600! p-4! rounded-md! w-full!',
    },
    label: {
      class: 'text-white! font-medium!',
    },
  },
  pcRejectButton: {
    host: {
      class: 'w-full!',
    },
    root: {
      class: 'border! border-zinc-400! bg-zinc-50! p-4! rounded-md! w-full!',
    },
    label: {
      class: 'text-zinc-800! font-medium!',
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
