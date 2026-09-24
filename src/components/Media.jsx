import Placeholder from './Placeholder.jsx'

// Shows the real image when `src` is set, otherwise a generated stand-in.
// Lets a project go live before its photos clear the release process.
export default function Media({ src, alt = '', kind = 'photo' }) {
  if (!src) return <Placeholder kind={kind} />
  return <img src={src} alt={alt} loading="lazy" />
}
