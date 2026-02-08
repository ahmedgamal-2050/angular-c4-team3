import { SelectPassThrough } from 'primeng/select';

export const inputClasses = {
  core: 'rounded-lg! border! placeholder:text-zinc-400! p-4! text-sm! w-full!',
  light: 'border-zinc-300! text-zinc-800! bg-white!',
  dark: 'dark:border-zinc-600! dark:text-zinc-50! dark:bg-zinc-700!',
  error: 'border-red-600! dark:border-red-500!',
  disabled:
    'disabled:text-zinc-400! disabled:bg-zinc-100! disabled:border-0! dark:disabled:bg-zinc-800! dark:disabled:text-zinc-600!',
};

export const labelClasses = {
  core: 'block text-sm font-medium',
  light: 'text-zinc-800!',
  dark: 'dark:text-zinc-50!',
  error: 'text-red-600! dark:text-red-500!',
  disabled: 'disabled:text-zinc-400! dark:disabled:text-zinc-600!',
};

export const FormDefaultClasses = {
  input: {
    default:
      inputClasses.core +
      ' ' +
      inputClasses.light +
      ' ' +
      inputClasses.dark +
      ' ' +
      inputClasses.disabled,
    error: inputClasses.core + ' ' + inputClasses.error,
  },
  label: {
    default:
      labelClasses.core +
      ' ' +
      labelClasses.light +
      ' ' +
      labelClasses.dark +
      ' ' +
      labelClasses.disabled,
    error: labelClasses.core + ' ' + labelClasses.error,
  },
};

export const PhonePT: SelectPassThrough = {
  pcOverlay: {
    content: 'bg-white dark:bg-zinc-800 p-2! rounded-sm! shadow-sm!',
  },
  pcFilter: {
    root: 'p-2! rounded-sm! border! border-zinc-200! dark:border-zinc-600!',
  },
  pcFilterIconContainer: {
    root: 'end-3! -translate-y-2/5!',
  },
  listContainer: 'pt-2!',
  option:
    'p-2! rounded-sm! hover:bg-zinc-100! dark:hover:bg-zinc-700! selected:p-0!',
};

export const SelectPT: SelectPassThrough = {
  pcOverlay: {
    content: 'bg-white dark:bg-zinc-800 shadow-lg rounded-sm p-2',
  },
  option: 'p-2! rounded-sm! hover:bg-zinc-100! dark:hover:bg-zinc-700!',
};
