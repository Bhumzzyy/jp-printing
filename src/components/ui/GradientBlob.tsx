type GradientBlobProps = {
  className?: string;
};

export default function GradientBlob({ className = "" }: GradientBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={`gradient-blob ${className}`}
    />
  );
}