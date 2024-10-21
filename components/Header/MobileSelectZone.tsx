import styles from './styles.module.scss';

type Props = {
  isOpen: boolean;
};

function MobileSelectZone({ isOpen }: Props) {
  return (
    <div className={`hide-desktop ${styles.mobileSelectZoneDefault} ${isOpen ? styles.mobileSelectZoneOpen : ''}`}>
      <div className={styles.mobileSelectItem}>
        <a href="/pricing">Pricing</a>
        <a href="/chrome-extension">Chrome extension</a>
        <a href="/use-cases">Use cases</a>
        <a href="/auth/sign-in">Get started →</a>
      </div>
    </div>
  );
}

export default MobileSelectZone;
