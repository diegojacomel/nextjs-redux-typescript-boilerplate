import '@emotion/react'

declare module '@emotion/react' {
  interface Colors {
    primary: string
    success: string
    error: string
  }

  export interface Theme {
    colors: Colors
  }
}
