import ServiceArt from "./ServiceArt";
import styles from "./ImagePlaceholder.module.css";

type ImagePlaceholderProps = {
  label: string;
  imagePath: string;
  artVariant: string;
  className?: string;
};

export default function ImagePlaceholder({
  label,
  imagePath,
  artVariant,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${styles.placeholder} ${className}`.trim()}
      role="img"
      aria-label={`Image placeholder for ${label}. Add the image at ${imagePath}.`}
    >
      <ServiceArt variant={artVariant} className={styles.art} />
      <span className={styles.caption}>
        <span className={styles.label}>ADD IMAGE</span>
        <code className={styles.path}>{imagePath}</code>
      </span>
    </div>
  );
}
