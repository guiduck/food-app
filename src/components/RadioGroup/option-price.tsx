interface OptionPriceProps {
  price?: string;
  originalPrice?: string;
  hasPromotion?: boolean;
}

export function OptionPrice({
  price,
  originalPrice,
  hasPromotion,
}: OptionPriceProps) {
  if (!price && !originalPrice) return null;

  const renderPrice = () => {
    if (!price) return null;
    return (
      <span
        className={`text-s font-bold ml-[4px] ${
          hasPromotion ? "text-success" : "text-primary"
        }`}
      >
        {price}
      </span>
    );
  };

  const renderOriginalPrice = () => {
    if (!originalPrice) return null;
    return (
      <span className="text-xs font-bold text-text-secondary">
        de {originalPrice} por
      </span>
    );
  };

  return (
    <div className="text-right ml-s">
      {renderOriginalPrice()}
      {renderPrice()}
    </div>
  );
}
