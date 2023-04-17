import styles from './Reset.module.css';

type ResetProps = {
  onClick: () => void;
};

export default function Reset ({onClick}: ResetProps) {
  return (
    <div className={styles.reset} onClick={onClick} />
  );
}
