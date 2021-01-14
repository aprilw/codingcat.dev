export default function TitleNunito({
  className = 'block w-12 h-12',
  fill = '#FFF',
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 372 56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6528 44.7548C14.889 44.7548 11.5865 43.8696 8.7452 42.0991C5.94084 40.3286 3.78221 37.7935 2.26933 34.4939C0.756442 31.1944 0 27.3314 0 22.9052C0 18.4789 0.756442 14.6361 2.26933 11.3768C3.78221 8.07718 5.94084 5.54213 8.7452 3.77163C11.5865 2.00112 14.889 1.11587 18.6528 1.11587C21.0881 1.11587 23.3759 1.51826 25.5161 2.32303C27.6563 3.08757 29.5566 4.21425 31.2171 5.70309C31.6968 6.10548 32.0289 6.52799 32.2134 6.97061C32.3979 7.41324 32.4901 7.95646 32.4901 8.60028C32.4901 9.48554 32.2687 10.23 31.8259 10.8335C31.3831 11.4371 30.8481 11.7389 30.2208 11.7389C29.4828 11.7389 28.7263 11.4572 27.9514 10.8939C26.3648 9.60625 24.8888 8.721 23.5235 8.23813C22.1582 7.71503 20.6453 7.45348 18.9848 7.45348C15.1473 7.45348 12.2322 8.76124 10.2396 11.3768C8.28396 13.9923 7.30612 17.8351 7.30612 22.9052C7.30612 28.0155 8.28396 31.8784 10.2396 34.4939C12.2322 37.1095 15.1473 38.4172 18.9848 38.4172C20.5715 38.4172 22.0291 38.1557 23.3574 37.6326C24.7227 37.1095 26.2541 36.2242 27.9514 34.9768C28.3204 34.7354 28.6894 34.5342 29.0584 34.3732C29.4274 34.2123 29.8149 34.1318 30.2208 34.1318C30.8481 34.1318 31.3831 34.4336 31.8259 35.0372C32.2687 35.6408 32.4901 36.3852 32.4901 37.2704C32.4901 37.874 32.3979 38.4172 32.2134 38.9001C32.0289 39.3427 31.6968 39.7652 31.2171 40.1676C29.5566 41.6564 27.6563 42.8033 25.5161 43.608C23.3759 44.3726 21.0881 44.7548 18.6528 44.7548ZM49.9235 44.6945C47.156 44.6945 44.7207 44.0708 42.6174 42.8234C40.551 41.576 38.9459 39.7853 37.802 37.4515C36.6581 35.1176 36.0862 32.4015 36.0862 29.3031C36.0862 26.2048 36.6581 23.5088 37.802 21.2151C38.9459 18.8813 40.551 17.0907 42.6174 15.8433C44.7207 14.5959 47.156 13.9722 49.9235 13.9722C52.691 13.9722 55.1079 14.5959 57.1743 15.8433C59.2775 17.0907 60.8827 18.8813 61.9897 21.2151C63.1336 23.5088 63.7055 26.2048 63.7055 29.3031C63.7055 32.4015 63.1336 35.1176 61.9897 37.4515C60.8827 39.7853 59.2775 41.576 57.1743 42.8234C55.1079 44.0708 52.691 44.6945 49.9235 44.6945ZM49.8681 38.8397C52.119 38.8397 53.8349 38.035 55.0156 36.4254C56.1964 34.8159 56.7868 32.4418 56.7868 29.3031C56.7868 26.2048 56.1964 23.8508 55.0156 22.2412C53.8349 20.5914 52.1375 19.7665 49.9235 19.7665C47.7095 19.7665 45.9937 20.5914 44.776 22.2412C43.5952 23.8508 43.0048 26.2048 43.0048 29.3031C43.0048 32.4418 43.5952 34.8159 44.776 36.4254C45.9568 38.035 47.6542 38.8397 49.8681 38.8397ZM91.9997 1.3573C93.0329 1.3573 93.8816 1.67921 94.5458 2.32303C95.21 2.96685 95.5421 3.81187 95.5421 4.85808V40.9523C95.5421 42.0387 95.2285 42.9039 94.6012 43.5477C93.9739 44.1915 93.1436 44.5134 92.1104 44.5134C91.0773 44.5134 90.247 44.1915 89.6197 43.5477C88.9924 42.9039 88.6788 42.0387 88.6788 40.9523V39.4433C87.867 41.0931 86.6862 42.3807 85.1364 43.3062C83.6235 44.2317 81.8893 44.6945 79.9336 44.6945C77.6089 44.6945 75.5241 44.0507 73.6791 42.763C71.871 41.4754 70.4504 39.6646 69.4172 37.3308C68.4209 34.9567 67.9228 32.2406 67.9228 29.1824C67.9228 26.1243 68.4209 23.4484 69.4172 21.1548C70.4504 18.8612 71.871 17.0907 73.6791 15.8433C75.4872 14.5959 77.572 13.9722 79.9336 13.9722C81.8893 13.9722 83.6235 14.4148 85.1364 15.3C86.6493 16.1853 87.8116 17.4327 88.6234 19.0422V4.73736C88.6234 3.73139 88.9186 2.92661 89.509 2.32303C90.1363 1.67921 90.9666 1.3573 91.9997 1.3573ZM81.7601 38.8397C83.9741 38.8397 85.6715 38.0148 86.8523 36.365C88.0699 34.7153 88.6788 32.3613 88.6788 29.3031C88.6788 26.245 88.0699 23.9111 86.8523 22.3016C85.6715 20.6518 83.9925 19.8269 81.8155 19.8269C79.6015 19.8269 77.8857 20.6317 76.668 22.2412C75.4503 23.8508 74.8414 26.1645 74.8414 29.1824C74.8414 32.2406 75.4503 34.6147 76.668 36.3047C77.8857 37.9947 79.583 38.8397 81.7601 38.8397ZM106.091 44.5738C105.095 44.5738 104.264 44.272 103.6 43.6684C102.973 43.0246 102.659 42.1192 102.659 40.9523V17.654C102.659 16.4871 102.973 15.6018 103.6 14.9983C104.264 14.3947 105.095 14.0929 106.091 14.0929C107.087 14.0929 107.917 14.3947 108.582 14.9983C109.246 15.6018 109.578 16.4871 109.578 17.654V40.9523C109.578 42.1192 109.246 43.0246 108.582 43.6684C107.917 44.272 107.087 44.5738 106.091 44.5738ZM106.091 8.721C104.836 8.721 103.84 8.35885 103.102 7.63455C102.364 6.87001 101.995 5.88416 101.995 4.677C101.995 3.46984 102.364 2.50411 103.102 1.77981C103.84 1.05551 104.836 0.693359 106.091 0.693359C107.309 0.693359 108.286 1.05551 109.024 1.77981C109.799 2.50411 110.187 3.46984 110.187 4.677C110.187 5.88416 109.818 6.87001 109.08 7.63455C108.342 8.35885 107.346 8.721 106.091 8.721ZM132.432 13.9722C135.679 13.9722 138.096 14.9781 139.683 16.9901C141.27 19.002 142.063 22.04 142.063 26.1042V40.9523C142.063 42.079 141.749 42.9642 141.122 43.608C140.532 44.2519 139.701 44.5738 138.631 44.5738C137.561 44.5738 136.712 44.2519 136.085 43.608C135.458 42.9642 135.144 42.079 135.144 40.9523V26.5267C135.144 24.2331 134.738 22.5631 133.927 21.5169C133.152 20.4707 131.916 19.9476 130.218 19.9476C128.226 19.9476 126.62 20.6317 125.403 21.9998C124.222 23.3679 123.632 25.1988 123.632 27.4924V40.9523C123.632 42.079 123.318 42.9642 122.691 43.608C122.063 44.2519 121.215 44.5738 120.145 44.5738C119.074 44.5738 118.226 44.2519 117.598 43.608C117.008 42.9642 116.713 42.079 116.713 40.9523V17.5937C116.713 16.5474 117.027 15.7024 117.654 15.0586C118.281 14.4148 119.13 14.0929 120.2 14.0929C121.159 14.0929 121.934 14.4148 122.525 15.0586C123.152 15.6622 123.466 16.467 123.466 17.4729V19.1026C124.388 17.4528 125.624 16.1853 127.174 15.3C128.724 14.4148 130.476 13.9722 132.432 13.9722ZM172.005 14.0929C173.038 14.0929 173.868 14.4148 174.495 15.0586C175.123 15.7024 175.436 16.5676 175.436 17.654V41.4955C175.436 46.123 174.256 49.6237 171.894 51.9978C169.532 54.3719 166.045 55.559 161.433 55.559C157.411 55.559 154.053 54.7341 151.359 53.0843C149.994 52.199 149.311 51.1327 149.311 49.8853C149.311 49 149.496 48.2959 149.865 47.7727C150.271 47.2496 150.787 46.9881 151.415 46.9881C151.747 46.9881 152.153 47.0686 152.632 47.2295C153.112 47.4307 153.61 47.652 154.127 47.8935C155.455 48.497 156.636 48.9598 157.669 49.2817C158.739 49.6036 159.957 49.7646 161.322 49.7646C166.156 49.7646 168.573 47.1893 168.573 42.0387V38.1758C167.761 39.8256 166.58 41.1132 165.031 42.0387C163.481 42.924 161.71 43.3666 159.717 43.3666C157.356 43.3666 155.252 42.763 153.407 41.5559C151.599 40.3084 150.179 38.5782 149.145 36.365C148.112 34.1519 147.596 31.5968 147.596 28.6996C147.596 25.8024 148.094 23.2472 149.09 21.0341C150.123 18.7807 151.562 17.0504 153.407 15.8433C155.252 14.5959 157.356 13.9722 159.717 13.9722C161.71 13.9722 163.481 14.4349 165.031 15.3604C166.58 16.2457 167.761 17.5132 168.573 19.163V17.5937C168.573 16.5474 168.887 15.7024 169.514 15.0586C170.141 14.4148 170.972 14.0929 172.005 14.0929ZM161.544 37.5119C163.758 37.5119 165.473 36.7272 166.691 35.1579C167.946 33.5886 168.573 31.4358 168.573 28.6996C168.573 25.9231 167.946 23.7502 166.691 22.1809C165.473 20.6116 163.758 19.8269 161.544 19.8269C159.367 19.8269 157.651 20.6116 156.396 22.1809C155.142 23.7502 154.514 25.9231 154.514 28.6996C154.514 31.4358 155.142 33.5886 156.396 35.1579C157.651 36.7272 159.367 37.5119 161.544 37.5119ZM200.647 44.7548C196.883 44.7548 193.581 43.8696 190.74 42.0991C187.935 40.3286 185.777 37.7935 184.264 34.4939C182.751 31.1944 181.994 27.3314 181.994 22.9052C181.994 18.4789 182.751 14.6361 184.264 11.3768C185.777 8.07718 187.935 5.54213 190.74 3.77163C193.581 2.00112 196.883 1.11587 200.647 1.11587C203.083 1.11587 205.37 1.51826 207.51 2.32303C209.651 3.08757 211.551 4.21425 213.211 5.70309C213.691 6.10548 214.023 6.52799 214.208 6.97061C214.392 7.41324 214.484 7.95646 214.484 8.60028C214.484 9.48554 214.263 10.23 213.82 10.8335C213.378 11.4371 212.842 11.7389 212.215 11.7389C211.477 11.7389 210.721 11.4572 209.946 10.8939C208.359 9.60625 206.883 8.721 205.518 8.23813C204.153 7.71503 202.64 7.45348 200.979 7.45348C197.142 7.45348 194.227 8.76124 192.234 11.3768C190.278 13.9923 189.301 17.8351 189.301 22.9052C189.301 28.0155 190.278 31.8784 192.234 34.4939C194.227 37.1095 197.142 38.4172 200.979 38.4172C202.566 38.4172 204.023 38.1557 205.352 37.6326C206.717 37.1095 208.248 36.2242 209.946 34.9768C210.315 34.7354 210.684 34.5342 211.053 34.3732C211.422 34.2123 211.809 34.1318 212.215 34.1318C212.842 34.1318 213.378 34.4336 213.82 35.0372C214.263 35.6408 214.484 36.3852 214.484 37.2704C214.484 37.874 214.392 38.4172 214.208 38.9001C214.023 39.3427 213.691 39.7652 213.211 40.1676C211.551 41.6564 209.651 42.8033 207.51 43.608C205.37 44.3726 203.083 44.7548 200.647 44.7548ZM231.309 13.9722C235.073 13.9722 237.859 14.9983 239.667 17.0504C241.512 19.0624 242.434 22.1406 242.434 26.2852V41.0126C242.434 42.0991 242.139 42.9642 241.549 43.608C240.958 44.2116 240.146 44.5134 239.113 44.5134C238.154 44.5134 237.36 44.1915 236.733 43.5477C236.143 42.9039 235.848 42.0588 235.848 41.0126V39.6847C235.22 41.2541 234.224 42.4813 232.859 43.3666C231.53 44.2519 229.98 44.6945 228.209 44.6945C226.401 44.6945 224.759 44.2921 223.283 43.4873C221.807 42.6825 220.645 41.576 219.796 40.1676C218.947 38.7593 218.523 37.1899 218.523 35.4597C218.523 33.2868 219.021 31.5766 220.018 30.3292C221.051 29.0818 222.711 28.1765 224.999 27.6131C227.287 27.0498 230.442 26.7681 234.464 26.7681H235.848V25.3799C235.848 23.4082 235.46 21.9797 234.685 21.0944C233.91 20.1689 232.656 19.7062 230.921 19.7062C229.851 19.7062 228.763 19.8873 227.656 20.2494C226.549 20.5713 225.239 21.0542 223.726 21.698C222.767 22.2211 222.066 22.4827 221.623 22.4827C220.959 22.4827 220.405 22.2211 219.962 21.698C219.556 21.1749 219.353 20.4908 219.353 19.6458C219.353 18.9618 219.501 18.3783 219.796 17.8954C220.128 17.3723 220.663 16.8895 221.401 16.4468C222.693 15.6823 224.224 15.0787 225.995 14.6361C227.803 14.1935 229.575 13.9722 231.309 13.9722ZM229.593 39.2622C231.438 39.2622 232.932 38.5983 234.076 37.2704C235.257 35.9023 235.848 34.1519 235.848 32.0193V30.7517H234.851C232.379 30.7517 230.46 30.8725 229.095 31.1139C227.73 31.3553 226.752 31.7778 226.161 32.3814C225.571 32.985 225.276 33.8099 225.276 34.8561C225.276 36.1437 225.682 37.2101 226.493 38.0551C227.342 38.8599 228.375 39.2622 229.593 39.2622ZM263.524 38.9604C265.369 39.0812 266.292 39.9865 266.292 41.6766C266.292 42.6423 265.923 43.3867 265.185 43.9098C264.483 44.3927 263.469 44.5939 262.14 44.5134L260.646 44.3927C254.447 43.9098 251.347 40.2883 251.347 33.5282V20.3701H248.58C247.583 20.3701 246.809 20.1287 246.255 19.6458C245.738 19.163 245.48 18.4588 245.48 17.5333C245.48 16.6078 245.738 15.9036 246.255 15.4208C246.809 14.9379 247.583 14.6965 248.58 14.6965H251.347V9.14351C251.347 8.05706 251.661 7.19193 252.288 6.5481C252.915 5.90428 253.764 5.58237 254.834 5.58237C255.867 5.58237 256.698 5.90428 257.325 6.5481C257.952 7.19193 258.266 8.05706 258.266 9.14351V14.6965H262.971C263.967 14.6965 264.723 14.9379 265.24 15.4208C265.793 15.9036 266.07 16.6078 266.07 17.5333C266.07 18.4588 265.793 19.163 265.24 19.6458C264.723 20.1287 263.967 20.3701 262.971 20.3701H258.266V34.0714C258.266 37.0491 259.52 38.6385 262.03 38.8397L263.524 38.9604ZM274.243 44.5738C273.063 44.5738 272.085 44.1513 271.31 43.3062C270.535 42.421 270.148 41.3345 270.148 40.0469C270.148 38.7593 270.535 37.6929 271.31 36.8479C272.085 35.9627 273.063 35.52 274.243 35.52C275.424 35.52 276.402 35.9627 277.177 36.8479C277.952 37.6929 278.339 38.7593 278.339 40.0469C278.339 41.3345 277.952 42.421 277.177 43.3062C276.402 44.1513 275.424 44.5738 274.243 44.5738ZM306.588 1.3573C307.621 1.3573 308.47 1.67921 309.134 2.32303C309.798 2.96685 310.13 3.81187 310.13 4.85808V40.9523C310.13 42.0387 309.816 42.9039 309.189 43.5477C308.562 44.1915 307.732 44.5134 306.698 44.5134C305.665 44.5134 304.835 44.1915 304.208 43.5477C303.58 42.9039 303.267 42.0387 303.267 40.9523V39.4433C302.455 41.0931 301.274 42.3807 299.724 43.3062C298.212 44.2317 296.477 44.6945 294.522 44.6945C292.197 44.6945 290.112 44.0507 288.267 42.763C286.459 41.4754 285.038 39.6646 284.005 37.3308C283.009 34.9567 282.511 32.2406 282.511 29.1824C282.511 26.1243 283.009 23.4484 284.005 21.1548C285.038 18.8612 286.459 17.0907 288.267 15.8433C290.075 14.5959 292.16 13.9722 294.522 13.9722C296.477 13.9722 298.212 14.4148 299.724 15.3C301.237 16.1853 302.4 17.4327 303.211 19.0422V4.73736C303.211 3.73139 303.507 2.92661 304.097 2.32303C304.724 1.67921 305.555 1.3573 306.588 1.3573ZM296.348 38.8397C298.562 38.8397 300.259 38.0148 301.44 36.365C302.658 34.7153 303.267 32.3613 303.267 29.3031C303.267 26.245 302.658 23.9111 301.44 22.3016C300.259 20.6518 298.581 19.8269 296.403 19.8269C294.189 19.8269 292.474 20.6317 291.256 22.2412C290.038 23.8508 289.429 26.1645 289.429 29.1824C289.429 32.2406 290.038 34.6147 291.256 36.3047C292.474 37.9947 294.171 38.8397 296.348 38.8397ZM338.666 36.1236C339.294 36.1236 339.792 36.3852 340.161 36.9083C340.567 37.4314 340.77 38.1356 340.77 39.0208C340.77 40.2682 340.087 41.3144 338.722 42.1594C337.467 42.924 336.047 43.5477 334.46 44.0305C332.873 44.4732 331.36 44.6945 329.921 44.6945C325.567 44.6945 322.117 43.3264 319.571 40.5901C317.025 37.8539 315.752 34.1117 315.752 29.3635C315.752 26.3456 316.305 23.6697 317.412 21.3359C318.519 19.002 320.069 17.1913 322.062 15.9036C324.091 14.616 326.379 13.9722 328.925 13.9722C331.36 13.9722 333.482 14.5556 335.29 15.7225C337.098 16.8895 338.5 18.5393 339.497 20.6719C340.493 22.8046 340.991 25.3195 340.991 28.2167C340.991 29.947 340.29 30.8121 338.888 30.8121H322.56C322.781 33.5886 323.501 35.6408 324.718 36.9686C325.936 38.2563 327.707 38.9001 330.032 38.9001C331.213 38.9001 332.246 38.7391 333.131 38.4172C334.054 38.0953 335.087 37.6527 336.231 37.0893C337.338 36.4455 338.15 36.1236 338.666 36.1236ZM329.091 19.2837C327.209 19.2837 325.696 19.9275 324.552 21.2151C323.445 22.5028 322.781 24.3538 322.56 26.7681H335.069C334.995 24.3135 334.441 22.4625 333.408 21.2151C332.375 19.9275 330.936 19.2837 329.091 19.2837ZM365.092 16.2658C365.387 15.5415 365.775 14.9983 366.254 14.6361C366.771 14.274 367.324 14.0929 367.915 14.0929C368.764 14.0929 369.52 14.4148 370.184 15.0586C370.885 15.6622 371.236 16.4267 371.236 17.3522C371.236 17.8351 371.125 18.3179 370.904 18.8008L360.664 42.1594C360.332 42.924 359.852 43.5074 359.225 43.9098C358.635 44.3122 357.97 44.5134 357.232 44.5134C356.531 44.5134 355.849 44.3122 355.185 43.9098C354.557 43.5074 354.078 42.924 353.745 42.1594L343.45 18.8008C343.266 18.3984 343.174 17.9357 343.174 17.4126C343.174 16.4871 343.524 15.7024 344.225 15.0586C344.963 14.4148 345.794 14.0929 346.716 14.0929C348.044 14.0929 349.022 14.7971 349.65 16.2054L357.398 34.8561L365.092 16.2658Z"
        fill={fill}
      />
    </svg>
  );
}
