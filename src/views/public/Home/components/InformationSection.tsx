interface InformationSectionProps {
  text: string;
}

export const InformationSection: React.FC<InformationSectionProps> = ({
  text,
}) => (
  <div className="home-page__information">
    <p>{text}</p>
  </div>
);
