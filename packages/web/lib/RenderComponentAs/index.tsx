import React, { useEffect, useState } from 'react';

export interface IRenderComponentAs {
  render: keyof JSX.IntrinsicElements;
  className?: string;
}

const RenderComponentAs: React.ComponentType<IRenderComponentAs> = ({
  render,
  children,
  ...props
}) => {
  const [CustomTag, setCustomTag] = useState(
    'div' as keyof JSX.IntrinsicElements,
  );

  useEffect(() => {
    setCustomTag(render);
  }, [render]);

  return <CustomTag {...props}>{children}</CustomTag>;
};

export { RenderComponentAs };
