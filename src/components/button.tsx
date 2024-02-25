export function Button({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-accent-500 font-medium line-clamp-1 h-fit min-w-56 p-4 rounded-md text-slate-50 text-lg transition-all hover:shadow-xl hover:shadow-accent-400/60 ${className}`}
      {...props}
    />
  );
}
