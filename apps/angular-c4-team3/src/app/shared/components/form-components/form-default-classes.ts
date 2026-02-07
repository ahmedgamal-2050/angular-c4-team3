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
