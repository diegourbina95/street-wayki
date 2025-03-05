interface InformationSectionProps {
  initialCapitalLetter?: string;
  text: string;
}

export const InformationSection: React.FC<InformationSectionProps> = ({
  initialCapitalLetter,
  text,
}) => (
  <div className="home-page__information">
    <p>
      <span className="home-page__information--capital">
        {initialCapitalLetter}
      </span>
      {text}
    </p>
  </div>
);
