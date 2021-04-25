import React, { lazy, Suspense } from 'react'

type FallbackProps = {
  fallback: JSX.Element
}

const loadable = (importFunc: any, { fallback }: FallbackProps): JSX.Element => {
  const LazyComponent = lazy(importFunc)

  const RenderElement: React.FC = (props: any): JSX.Element => {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    )
  }

  return <RenderElement />
}

export default loadable
