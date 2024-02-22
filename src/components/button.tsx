export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-accent-500 shadow-2xl shadow-accent-400/50 font-medium min-w-56 p-4 rounded-sm text-slate-50 transition-all hover:bg-accent-600 hover:shadow-accent-400/80 ${className}`}
      {...props}
    />
  );
}
