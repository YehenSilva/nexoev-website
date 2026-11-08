export default function Button({ href = '#', variant = 'dark', small = false, children, ...rest }) {
  return (
    <a href={href} className={`btn btn--${variant} ${small ? 'btn--sm' : ''}`} {...rest}>
      {children}
    </a>
  );
}
