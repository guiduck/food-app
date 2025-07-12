interface GroupHeaderProps {
  title?: string;
  subtitle?: string;
  required?: boolean;
}

export function GroupHeader({ title, subtitle, required }: GroupHeaderProps) {
  if (!title) return null;

  const renderSubtitle = () => {
    if (!subtitle) return null;
    return (
      <p className="text-xs font-bold leading-m text-text-secondary">
        {subtitle}
      </p>
    );
  };

  const renderRequired = () => {
    if (!required) return null;
    return (
      <span className="bg-text-medium rounded-s font-bold text-white text-xs py-xxs px-xs ml-xs">
        obrigatório
      </span>
    );
  };

  return (
    <div className="flex justify-between space-y-xs items-center">
      <div className="flex flex-col gap-[2px]">
        <h3 className="text-m font-bold leading-[22px] text-text-primary">
          {title}
        </h3>
        {renderSubtitle()}
      </div>
      {renderRequired()}
    </div>
  );
}
