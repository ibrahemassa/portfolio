interface SectionHeaderProps {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="section-header reveal">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}
