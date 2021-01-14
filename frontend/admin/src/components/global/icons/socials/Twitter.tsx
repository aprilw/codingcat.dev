export default function Twitter({
  className = 'block w-8 h-8',
  fill,
}: {
  className?: string;
  fill: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.2468 11.5885C41.2468 11.5885 39.4524 13.035 36.935 13.2954C36.935 13.2954 32.9711 8.86833 27.2996 12.7169C24.7538 14.5107 24.5218 18.301 24.9559 19.6614C24.9559 19.6614 17.2593 20.269 10.5461 12.3982C10.5461 12.3982 7.5371 17.6065 12.5142 21.7732C12.5142 21.7732 11.0427 22.0051 9.64474 20.8475C9.64474 20.8475 8.98363 26.2294 15.0024 27.7343C15.0024 27.7343 14.5975 28.4287 12.167 27.7343C12.167 27.7343 12.5718 32.1322 18.301 32.769C18.301 32.769 15.2059 35.9517 8.24683 35.5468C8.24683 35.5468 19.7475 44.169 32.1899 33.7524C39.1343 27.8496 38.9031 19.3426 38.7871 18.0697C38.7871 18.0697 41.5302 15.9864 42.242 14.6551C42.242 14.6551 40.1184 15.3496 38.3822 15.3496C38.3822 15.3496 40.6968 14.1343 41.2468 11.5885Z"
        fill={fill}
      />
      <path
        d="M41.2468 11.5885C41.2468 11.5885 39.4524 13.035 36.935 13.2954C36.935 13.2954 32.9711 8.86833 27.2996 12.7169C24.7538 14.5107 24.5218 18.301 24.9559 19.6614C24.9559 19.6614 17.2593 20.269 10.5461 12.3982C10.5461 12.3982 7.5371 17.6065 12.5142 21.7732C12.5142 21.7732 11.0427 22.0051 9.64474 20.8475C9.64474 20.8475 8.98363 26.2294 15.0024 27.7343C15.0024 27.7343 14.5975 28.4287 12.167 27.7343C12.167 27.7343 12.5718 32.1322 18.301 32.769C18.301 32.769 15.2059 35.9517 8.24683 35.5468C8.24683 35.5468 19.7475 44.169 32.1899 33.7524C39.1343 27.8496 38.9031 19.3426 38.7871 18.0697C38.7871 18.0697 41.5302 15.9864 42.242 14.6551C42.242 14.6551 40.1184 15.3496 38.3822 15.3496C38.3822 15.3496 40.6968 14.1343 41.2468 11.5885V11.5885Z"
        stroke="#141214"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
