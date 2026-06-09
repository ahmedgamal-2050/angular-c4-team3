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
