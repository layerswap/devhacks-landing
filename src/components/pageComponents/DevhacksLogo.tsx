import { FC } from "react";

interface Props {
    className?: string,
    showSponsor?: boolean
}

const DevhacksLogo: FC<Props> = (({ className, showSponsor }) => {
    return (
        <>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" width="561" height="171" viewBox="0 0 561 171" fill="none">
                <path d="M12.8558 64.4714C17.0348 64.4714 20.4243 61.0819 20.4243 56.9029V51.417C20.4243 37.1647 29.0275 27.9627 43.5792 27.9627C58.131 27.9627 66.7341 37.1647 66.7341 51.417V110.931C66.7341 115.11 70.1236 118.5 74.3027 118.5H78.754C82.933 118.5 86.3225 115.11 86.3225 110.931V52.0024C86.3225 25.281 69.7016 10.4434 43.5792 10.4434C17.4568 10.4434 0.835938 25.281 0.835938 52.0024V56.9029C0.835938 61.0819 4.22545 64.4714 8.40449 64.4714H12.8558Z" fill="#FF0093" />
                <path d="M12.2462 3.18838C9.55096 -1.01789 9.44206 -0.555065 8.5028 1.66378C7.4138 4.25015 7.38657 7.50354 7.34573 10.2533C7.27767 14.3098 7.78133 19.7956 9.8096 23.403C11.7834 26.915 16.3164 24.4239 18.3446 22.5726C21.1897 19.9862 22.2923 16.6239 19.9509 13.2208C19.9509 13.2208 14.9279 7.38103 12.2462 3.17476V3.18838Z" fill="#FF0093" />
                <path d="M78.6718 1.66378C77.7325 -0.555065 77.6236 -1.01789 74.9283 3.18838C72.2467 7.39464 67.2236 13.2344 67.2236 13.2344C64.8823 16.6512 65.9713 20.0134 68.8299 22.5862C70.8718 24.4375 75.4048 26.9286 77.365 23.4166C79.3932 19.8093 79.8833 14.3098 79.8288 10.2669C79.788 7.51716 79.7608 4.26377 78.6718 1.67739V1.66378Z" fill="#FF0093" />
                <path d="M217.03 119.453C214.213 119.453 212.035 118.677 210.483 117.139C209.026 115.505 208.305 113.273 208.305 110.455V30.1278C208.305 27.2147 209.026 24.9958 210.483 23.444C212.035 21.8922 214.213 21.1299 217.03 21.1299C219.848 21.1299 221.985 21.9058 223.442 23.444C224.994 24.9958 225.756 27.2147 225.756 30.1278V62.3077H275.265V30.1278C275.265 27.2147 275.986 24.9958 277.443 23.444C278.994 21.8922 281.172 21.1299 283.99 21.1299C286.808 21.1299 288.945 21.9058 290.402 23.444C291.954 24.9958 292.716 27.2147 292.716 30.1278V110.455C292.716 113.273 291.94 115.505 290.402 117.139C288.945 118.691 286.808 119.453 283.99 119.453C281.172 119.453 278.994 118.677 277.443 117.139C275.986 115.505 275.265 113.273 275.265 110.455V76.914H225.756V110.455C225.756 113.273 225.034 115.505 223.578 117.139C222.121 118.691 219.943 119.453 217.03 119.453Z" fill="#FF0093" />
                <path d="M327.292 119.727C322.473 119.727 318.158 118.815 314.332 117.004C310.603 115.098 307.649 112.553 305.471 109.367C303.374 106.182 302.34 102.588 302.34 98.6C302.34 93.6859 303.606 89.8335 306.165 87.0021C308.71 84.0891 312.849 82.0063 318.58 80.7268C324.31 79.4608 331.988 78.821 341.626 78.821H348.445V88.6356H341.762C336.126 88.6356 331.62 88.9079 328.258 89.4524C324.896 89.9969 322.486 90.9498 321.03 92.311C319.669 93.5906 318.988 95.4011 318.988 97.7696C318.988 100.764 320.036 103.228 322.119 105.134C324.215 107.04 327.115 107.993 330.844 107.993C333.839 107.993 336.48 107.312 338.753 105.951C341.122 104.494 342.987 102.548 344.348 100.084C345.709 97.6335 346.39 94.8157 346.39 91.6304V75.9488C346.39 71.4022 345.396 68.1352 343.395 66.1342C341.394 64.1331 338.032 63.1394 333.308 63.1394C330.667 63.1394 327.809 63.4525 324.719 64.0923C321.724 64.7321 318.539 65.8211 315.176 67.3593C313.448 68.176 311.909 68.4074 310.535 68.0399C309.255 67.6724 308.261 66.9509 307.54 65.8619C306.818 64.6776 306.451 63.4116 306.451 62.0368C306.451 60.6619 306.818 59.3551 307.54 58.0755C308.261 56.7143 309.5 55.707 311.215 55.0808C315.394 53.352 319.396 52.1269 323.221 51.4054C327.128 50.6839 330.681 50.3164 333.853 50.3164C340.4 50.3164 345.764 51.3101 349.943 53.3112C354.217 55.3122 357.402 58.3614 359.485 62.4452C361.582 66.4472 362.616 71.6336 362.616 77.9907V110.715C362.616 113.533 361.935 115.711 360.574 117.263C359.213 118.719 357.253 119.441 354.707 119.441C352.162 119.441 350.161 118.719 348.704 117.263C347.343 115.711 346.662 113.533 346.662 110.715V104.168H347.751C347.111 107.353 345.845 110.116 343.926 112.485C342.102 114.758 339.788 116.528 336.97 117.807C334.152 119.087 330.926 119.713 327.292 119.713V119.727Z" fill="#FF0093" />
                <path d="M405.277 119.727C398.28 119.727 392.182 118.311 387.009 115.493C381.823 112.58 377.821 108.496 375.003 103.215C372.185 97.9466 370.77 91.7529 370.77 84.6744C370.77 79.3111 371.545 74.5331 373.084 70.354C374.717 66.0797 377.045 62.486 380.04 59.5865C383.034 56.5918 386.683 54.3185 390.957 52.7667C395.231 51.1332 399.996 50.3164 405.277 50.3164C408.272 50.3164 411.498 50.7248 414.956 51.5415C418.495 52.3583 421.816 53.7195 424.906 55.6389C426.363 56.5509 427.316 57.6399 427.765 58.9059C428.214 60.1855 428.31 61.4923 428.037 62.8671C427.765 64.1467 427.166 65.2766 426.268 66.2703C425.451 67.1823 424.403 67.7677 423.137 68.0399C421.857 68.2169 420.455 67.9038 418.903 67.087C416.902 65.9027 414.86 65.0451 412.764 64.5006C410.668 63.8609 408.667 63.5478 406.761 63.5478C403.766 63.5478 401.125 64.0514 398.852 65.0451C396.579 65.9572 394.619 67.3184 392.985 69.1425C391.433 70.8713 390.263 73.0493 389.432 75.6901C388.616 78.331 388.207 81.3666 388.207 84.8241C388.207 91.5487 389.8 96.8712 392.985 100.778C396.252 104.603 400.853 106.509 406.761 106.509C408.667 106.509 410.627 106.237 412.628 105.692C414.724 105.148 416.807 104.276 418.903 103.106C420.442 102.289 421.816 102.017 423.001 102.289C424.267 102.561 425.315 103.201 426.132 104.195C426.948 105.107 427.452 106.237 427.629 107.598C427.806 108.877 427.629 110.143 427.084 111.423C426.635 112.703 425.723 113.737 424.362 114.554C421.367 116.378 418.182 117.685 414.82 118.515C411.457 119.332 408.272 119.74 405.277 119.74V119.727Z" fill="#FF0093" />
                <path d="M445.883 119.453C443.161 119.453 441.064 118.732 439.608 117.275C438.151 115.723 437.43 113.545 437.43 110.727V29.7194C437.43 26.9016 438.151 24.7644 439.608 23.3079C441.064 21.8513 443.147 21.1299 445.883 21.1299C448.619 21.1299 450.702 21.8513 452.158 23.3079C453.697 24.7644 454.473 26.9016 454.473 29.7194V80.0448H454.745L477.246 56.3182C479.07 54.4942 480.649 53.0921 482.024 52.0847C483.386 51.091 485.25 50.5874 487.619 50.5874C489.988 50.5874 491.757 51.2272 492.942 52.4931C494.207 53.6774 494.847 55.1339 494.847 56.8627C494.847 58.5915 494.03 60.3203 492.397 62.0491L468.67 87.137V80.0448L494.711 108.141C496.345 109.87 497.08 111.639 496.889 113.464C496.794 115.192 496.072 116.649 494.711 117.833C493.35 118.922 491.621 119.467 489.525 119.467C486.979 119.467 484.937 118.963 483.386 117.969C481.929 116.976 480.295 115.465 478.471 113.464L454.745 88.648H454.473V110.741C454.473 116.554 451.614 119.467 445.883 119.467V119.453Z" fill="#FF0093" />
                <path d="M532.528 119.726C528.621 119.726 524.483 119.317 520.113 118.501C515.744 117.684 511.837 116.268 508.379 114.267C506.923 113.355 505.875 112.307 505.248 111.136C504.704 109.87 504.472 108.632 504.568 107.461C504.745 106.195 505.208 105.092 505.929 104.194C506.746 103.282 507.753 102.696 508.924 102.424C510.19 102.152 511.565 102.383 513.021 103.105C516.656 104.834 520.059 106.059 523.244 106.78C526.429 107.42 529.56 107.733 532.65 107.733C537.02 107.733 540.246 107.012 542.329 105.555C544.507 104.003 545.596 102.016 545.596 99.5519C545.596 97.4556 544.861 95.8766 543.418 94.774C542.057 93.5897 539.96 92.7321 537.143 92.1876L523.503 89.6012C517.867 88.5122 513.552 86.4703 510.544 83.462C507.631 80.3719 506.174 76.4107 506.174 71.5918C506.174 67.2222 507.358 63.4516 509.713 60.2798C512.164 57.0945 515.526 54.6443 519.8 52.9155C524.074 51.1867 528.975 50.3291 534.529 50.3291C538.531 50.3291 542.261 50.7783 545.705 51.6904C549.244 52.5071 552.661 53.8275 555.928 55.6516C557.289 56.3731 558.201 57.3395 558.65 58.5102C559.195 59.6945 559.331 60.9196 559.059 62.1856C558.786 63.3699 558.242 64.4589 557.425 65.4526C556.608 66.3646 555.56 66.95 554.294 67.2222C553.11 67.3992 551.749 67.1269 550.197 66.4055C547.379 64.9489 544.657 63.9008 542.016 63.2746C539.47 62.6348 537.02 62.3217 534.651 62.3217C530.2 62.3217 526.879 63.0976 524.701 64.6359C522.604 66.1877 521.57 68.2296 521.57 70.7751C521.57 72.6809 522.21 74.2735 523.476 75.5531C524.742 76.8327 526.702 77.6903 529.343 78.1395L542.982 80.7258C548.89 81.8148 553.341 83.8159 556.35 86.729C559.44 89.642 560.992 93.5488 560.992 98.463C560.992 105.106 558.405 110.333 553.219 114.145C548.033 117.874 541.131 119.739 532.487 119.739L532.528 119.726Z" fill="#FF0093" />
                <path d="M110.8 63.3154C96.0851 65.4526 82.5407 71.6735 78.4297 77.84L86.3386 102.955C86.6925 90.908 98.4673 83.5572 110.814 80.6442V63.3154H110.8Z" fill="#FF0093" />
                <path d="M286.659 169.683C286.618 169.451 286.468 168.648 286.223 167.491L286.196 167.464C285.556 164.292 284.127 158.207 282.058 151.347C279.948 144.363 277.157 136.618 273.713 130.424C272.665 128.546 271.59 126.803 270.432 125.238C270.432 125.238 270.909 128.655 269.956 133.65C269.806 134.603 269.588 135.611 269.316 136.618C269.275 136.822 269.194 137.054 269.126 137.217C268.486 139.749 267.41 142.458 265.845 145.303C265.75 145.493 265.627 145.67 265.518 145.861C260.305 142.09 244.61 135.515 222.53 135.515C217.752 135.515 212.675 135.828 207.352 136.536C185.477 139.449 151.922 152.055 130.972 152.055C119.633 152.055 111.996 148.366 111.901 137.462C111.697 114.906 169.196 111.013 153.787 78.9145C150.452 71.9585 144.639 67.5753 137.683 65.125V83.4611C138.377 84.2234 138.868 85.0673 139.085 86.0202C140.474 92.1867 136.853 98.2306 116.094 106.711C98.7378 113.79 93.1839 127.647 94.2865 139.082C94.9399 145.806 101.311 166.579 133.137 166.579C164.963 166.579 176.22 148.76 222.19 145.207C224.068 145.058 225.906 144.99 227.703 144.99C243.003 144.99 254.683 149.931 260.373 152.939C260.033 153.32 259.719 153.688 259.352 154.069C257.283 156.152 254.873 158.207 251.96 160.1C251.566 160.399 251.198 160.658 250.762 160.93C248.203 162.577 245.29 164.129 241.982 165.545C241.982 165.545 243.902 165.735 247.005 166.021C255.717 166.838 273.754 168.526 283.487 169.492C284.685 169.601 285.747 169.696 286.659 169.792C286.659 169.792 286.65 169.76 286.631 169.696L286.659 169.683Z" fill="#FF0093" />
                <path d="M133.9 91.5604H133.927C133.723 90.2536 133.6 88.8379 133.6 87.3133V24.6412C133.6 20.258 130.047 16.7188 125.678 16.7188H122.833C118.449 16.7188 114.91 20.2716 114.91 24.6412V88.8106C114.91 93.575 115.7 97.931 117.156 101.811C117.769 101.579 129.394 97.0462 133.913 91.574L133.9 91.5604Z" fill="#FF0093" />
                <path d="M192.621 102.641H186.141V68.2692C186.141 63.8859 182.588 60.3467 178.219 60.3467H175.374C170.991 60.3467 167.451 63.8995 167.451 68.2692V82.2764C167.451 93.2617 163.123 100.585 155.472 103.036C155.472 103.036 151.579 109.338 135.23 118.567C137.817 119.275 140.594 119.67 143.548 119.67C156.752 119.67 162.701 113.885 165.069 108.834H167.737V112.387C167.737 115.75 170.46 118.486 173.836 118.486H186.155H192.634C197.018 118.486 200.557 114.933 200.557 110.563C200.557 106.194 197.004 102.641 192.634 102.641H192.621Z" fill="#FF0093" />
                {showSponsor && <>
                    <path d="M318.91 165.232C318.705 165.232 318.547 165.172 318.439 165.063C318.33 164.955 318.27 164.797 318.27 164.592V152.05C318.27 151.833 318.33 151.663 318.439 151.555C318.547 151.446 318.705 151.385 318.91 151.385C319.103 151.385 319.248 151.434 319.357 151.555C319.466 151.663 319.526 151.82 319.526 152.05V154.128L319.297 154.007C319.526 153.186 319.973 152.545 320.626 152.074C321.278 151.603 322.064 151.361 322.994 151.361C323.924 151.361 324.649 151.567 325.302 151.99C325.966 152.413 326.474 153.005 326.836 153.766C327.199 154.527 327.392 155.433 327.392 156.472C327.392 157.511 327.211 158.43 326.836 159.203C326.486 159.964 325.978 160.556 325.326 160.979C324.673 161.39 323.9 161.595 323.006 161.595C322.112 161.595 321.29 161.354 320.638 160.883C319.985 160.411 319.538 159.771 319.309 158.986H319.538V164.592C319.538 164.797 319.478 164.955 319.369 165.063C319.26 165.172 319.115 165.232 318.922 165.232H318.91ZM322.801 160.568C323.465 160.568 324.045 160.411 324.528 160.097C325.036 159.771 325.423 159.3 325.688 158.696C325.954 158.079 326.099 157.354 326.099 156.497C326.099 155.204 325.797 154.201 325.205 153.5C324.613 152.787 323.803 152.437 322.801 152.437C322.136 152.437 321.544 152.606 321.049 152.932C320.553 153.246 320.179 153.705 319.901 154.322C319.623 154.914 319.49 155.651 319.49 156.509C319.49 157.814 319.792 158.816 320.384 159.529C320.988 160.23 321.786 160.593 322.788 160.593L322.801 160.568Z" fill="white" />
                    <path d="M333.942 161.608C333.012 161.608 332.214 161.402 331.537 160.979C330.861 160.557 330.329 159.965 329.943 159.203C329.58 158.442 329.387 157.536 329.387 156.497C329.387 155.723 329.483 155.023 329.689 154.394C329.906 153.766 330.208 153.234 330.607 152.787C331.018 152.328 331.501 151.978 332.057 151.748C332.625 151.507 333.253 151.386 333.93 151.386C334.872 151.386 335.682 151.591 336.359 152.014C337.035 152.437 337.567 153.029 337.929 153.814C338.316 154.576 338.497 155.47 338.497 156.509C338.497 157.294 338.388 158.007 338.171 158.635C337.966 159.264 337.663 159.795 337.253 160.242C336.854 160.69 336.383 161.04 335.827 161.282C335.271 161.511 334.643 161.632 333.93 161.632L333.942 161.608ZM333.942 160.569C334.619 160.569 335.211 160.412 335.694 160.097C336.201 159.771 336.576 159.3 336.842 158.696C337.108 158.08 337.253 157.355 337.253 156.497C337.253 155.204 336.951 154.201 336.359 153.5C335.779 152.787 334.969 152.437 333.954 152.437C333.289 152.437 332.697 152.606 332.202 152.932C331.707 153.246 331.332 153.706 331.054 154.322C330.8 154.914 330.667 155.651 330.667 156.509C330.667 157.814 330.97 158.817 331.562 159.53C332.154 160.23 332.951 160.593 333.942 160.593V160.569Z" fill="white" />
                    <path d="M344.272 161.56C344.091 161.56 343.934 161.512 343.777 161.415C343.644 161.306 343.523 161.137 343.426 160.92L340.345 152.341C340.273 152.148 340.261 151.99 340.285 151.846C340.321 151.713 340.393 151.604 340.49 151.519C340.599 151.435 340.732 151.398 340.877 151.398C341.046 151.398 341.167 151.435 341.263 151.519C341.36 151.592 341.445 151.725 341.505 151.93L344.526 160.702H344.018L347.16 151.991C347.232 151.785 347.329 151.64 347.462 151.543C347.595 151.447 347.752 151.398 347.933 151.398C348.126 151.398 348.284 151.447 348.429 151.543C348.561 151.64 348.67 151.785 348.731 151.991L351.788 160.702H351.28L354.385 151.918C354.458 151.713 354.53 151.58 354.627 151.507C354.724 151.435 354.857 151.411 355.014 151.411C355.207 151.411 355.34 151.459 355.425 151.556C355.509 151.652 355.545 151.761 355.545 151.906C355.557 152.039 355.545 152.196 355.485 152.353L352.38 160.932C352.295 161.149 352.186 161.306 352.029 161.427C351.896 161.524 351.727 161.572 351.534 161.572C351.353 161.572 351.196 161.524 351.038 161.427C350.893 161.318 350.773 161.149 350.688 160.932L347.522 152.123H348.271L345.094 160.932C345.009 161.149 344.9 161.306 344.743 161.427C344.61 161.524 344.441 161.572 344.236 161.572L344.272 161.56Z" fill="white" />
                    <path d="M362.238 161.607C361.223 161.607 360.341 161.402 359.604 160.991C358.867 160.58 358.311 160 357.912 159.239C357.514 158.478 357.32 157.572 357.32 156.532C357.32 155.493 357.514 154.599 357.912 153.838C358.311 153.065 358.855 152.461 359.544 152.026C360.256 151.591 361.054 151.373 361.972 151.373C362.637 151.373 363.229 151.494 363.724 151.723C364.244 151.941 364.679 152.255 365.029 152.678C365.392 153.089 365.67 153.584 365.863 154.188C366.056 154.768 366.153 155.445 366.153 156.182C366.153 156.375 366.105 156.52 365.984 156.605C365.887 156.702 365.754 156.75 365.573 156.75H358.214V155.832H365.367L365.041 156.097C365.041 155.312 364.92 154.647 364.691 154.104C364.461 153.548 364.111 153.113 363.652 152.823C363.205 152.521 362.649 152.376 361.984 152.376C361.235 152.376 360.607 152.557 360.087 152.908C359.568 153.246 359.181 153.729 358.927 154.333C358.674 154.925 358.541 155.626 358.541 156.412V156.508C358.541 157.813 358.855 158.816 359.495 159.529C360.136 160.218 361.03 160.568 362.19 160.568C362.697 160.568 363.18 160.496 363.64 160.363C364.111 160.23 364.582 160 365.029 159.674C365.162 159.577 365.295 159.529 365.416 159.529C365.549 159.529 365.657 159.565 365.742 159.626C365.839 159.698 365.899 159.783 365.923 159.891C365.96 159.988 365.96 160.097 365.899 160.218C365.863 160.326 365.766 160.423 365.633 160.52C365.198 160.87 364.679 161.148 364.063 161.341C363.446 161.523 362.842 161.607 362.226 161.607H362.238Z" fill="white" />
                    <path d="M369.32 161.56C369.115 161.56 368.958 161.499 368.849 161.391C368.74 161.282 368.68 161.125 368.68 160.919V152.05C368.68 151.833 368.728 151.664 368.849 151.555C368.958 151.446 369.115 151.386 369.32 151.386C369.513 151.386 369.658 151.434 369.743 151.555C369.852 151.664 369.912 151.821 369.912 152.05V153.863H369.707C369.948 153.065 370.383 152.437 371.012 152.002C371.652 151.567 372.413 151.338 373.295 151.326C373.464 151.313 373.597 151.35 373.706 151.422C373.815 151.507 373.875 151.628 373.875 151.809C373.887 152.002 373.851 152.147 373.754 152.256C373.658 152.353 373.501 152.413 373.283 152.437L372.993 152.461C372.027 152.558 371.277 152.872 370.746 153.416C370.214 153.96 369.948 154.697 369.948 155.615V160.895C369.948 161.101 369.888 161.258 369.779 161.366C369.683 161.475 369.525 161.536 369.308 161.536L369.32 161.56Z" fill="white" />
                    <path d="M379.847 161.607C378.832 161.607 377.95 161.402 377.213 160.991C376.476 160.58 375.921 160 375.522 159.239C375.123 158.478 374.93 157.572 374.93 156.532C374.93 155.493 375.123 154.599 375.522 153.838C375.921 153.065 376.464 152.461 377.153 152.026C377.866 151.591 378.663 151.373 379.582 151.373C380.246 151.373 380.826 151.494 381.334 151.723C381.853 151.941 382.288 152.255 382.639 152.678C383.001 153.089 383.279 153.584 383.472 154.188C383.666 154.768 383.762 155.445 383.762 156.182C383.762 156.375 383.702 156.52 383.593 156.605C383.496 156.702 383.364 156.75 383.182 156.75H375.824V155.832H382.977L382.651 156.097C382.651 155.312 382.53 154.647 382.3 154.104C382.071 153.548 381.72 153.113 381.261 152.823C380.814 152.521 380.258 152.376 379.594 152.376C378.845 152.376 378.216 152.557 377.697 152.908C377.177 153.246 376.79 153.729 376.537 154.333C376.283 154.925 376.15 155.626 376.15 156.412V156.508C376.15 157.813 376.464 158.816 377.105 159.529C377.745 160.218 378.639 160.568 379.799 160.568C380.307 160.568 380.79 160.496 381.249 160.363C381.72 160.23 382.191 160 382.639 159.674C382.771 159.577 382.904 159.529 383.025 159.529C383.158 159.529 383.267 159.565 383.351 159.626C383.448 159.698 383.509 159.783 383.533 159.891C383.569 159.988 383.569 160.097 383.508 160.218C383.472 160.326 383.376 160.423 383.243 160.52C382.808 160.87 382.288 161.148 381.672 161.341C381.056 161.523 380.452 161.607 379.835 161.607H379.847Z" fill="white" />
                    <path d="M390.062 161.608C389.18 161.608 388.406 161.403 387.742 160.992C387.089 160.569 386.582 159.977 386.207 159.216C385.857 158.442 385.676 157.524 385.676 156.485C385.676 155.446 385.857 154.54 386.207 153.778C386.558 153.017 387.065 152.425 387.718 152.002C388.382 151.579 389.168 151.374 390.062 151.374C390.956 151.374 391.778 151.615 392.43 152.087C393.083 152.558 393.518 153.198 393.735 154.008H393.505V147.58C393.505 147.362 393.566 147.205 393.675 147.109C393.783 147 393.928 146.939 394.122 146.939C394.327 146.939 394.484 147 394.593 147.109C394.702 147.205 394.762 147.362 394.762 147.58V160.931C394.762 161.137 394.714 161.294 394.593 161.403C394.484 161.511 394.339 161.572 394.146 161.572C393.94 161.572 393.783 161.511 393.675 161.403C393.566 161.294 393.505 161.137 393.505 160.931V158.829L393.735 158.974C393.518 159.771 393.083 160.412 392.43 160.895C391.778 161.366 390.992 161.608 390.062 161.608ZM390.231 160.569C390.908 160.569 391.5 160.412 391.983 160.098C392.49 159.771 392.865 159.3 393.131 158.696C393.409 158.08 393.542 157.355 393.542 156.497C393.542 155.204 393.24 154.201 392.648 153.5C392.068 152.788 391.258 152.437 390.243 152.437C389.579 152.437 388.999 152.606 388.491 152.933C387.996 153.247 387.621 153.706 387.343 154.322C387.089 154.914 386.957 155.651 386.957 156.509C386.957 157.814 387.259 158.817 387.851 159.53C388.455 160.231 389.24 160.593 390.231 160.593V160.569Z" fill="white" />
                    <path d="M407.861 161.608C406.931 161.608 406.145 161.366 405.493 160.895C404.84 160.424 404.393 159.783 404.164 158.974L404.393 158.853V160.931C404.393 161.137 404.333 161.294 404.224 161.403C404.115 161.511 403.97 161.572 403.777 161.572C403.572 161.572 403.415 161.511 403.306 161.403C403.197 161.294 403.137 161.137 403.137 160.931V147.58C403.137 147.362 403.185 147.205 403.306 147.109C403.415 147 403.572 146.939 403.777 146.939C403.97 146.939 404.115 147 404.224 147.109C404.333 147.205 404.393 147.362 404.393 147.58V154.008H404.164C404.393 153.21 404.84 152.57 405.493 152.087C406.145 151.615 406.931 151.374 407.861 151.374C408.791 151.374 409.529 151.579 410.181 152.002C410.833 152.425 411.341 153.017 411.691 153.778C412.054 154.54 412.247 155.446 412.247 156.485C412.247 157.524 412.066 158.442 411.691 159.216C411.341 159.977 410.833 160.569 410.157 160.992C409.504 161.403 408.731 161.608 407.849 161.608H407.861ZM407.68 160.569C408.344 160.569 408.924 160.412 409.408 160.098C409.915 159.771 410.302 159.3 410.568 158.696C410.833 158.08 410.978 157.355 410.978 156.497C410.978 155.204 410.676 154.201 410.084 153.5C409.48 152.788 408.683 152.437 407.68 152.437C407.015 152.437 406.423 152.606 405.928 152.933C405.432 153.247 405.058 153.706 404.78 154.322C404.502 154.914 404.369 155.651 404.369 156.509C404.369 157.814 404.671 158.817 405.263 159.53C405.855 160.231 406.665 160.593 407.668 160.593L407.68 160.569Z" fill="white" />
                    <path d="M416.856 165.233C416.687 165.233 416.566 165.185 416.469 165.088C416.372 165.004 416.324 164.895 416.3 164.738C416.3 164.605 416.324 164.46 416.385 164.315L417.786 161.113V161.681L413.787 152.341C413.714 152.172 413.69 152.027 413.702 151.894C413.726 151.749 413.787 151.628 413.883 151.543C413.992 151.447 414.137 151.398 414.33 151.398C414.512 151.398 414.633 151.435 414.717 151.519C414.814 151.604 414.898 151.725 414.959 151.906L418.584 160.69H418.076L421.701 151.906C421.786 151.713 421.87 151.592 421.967 151.519C422.063 151.435 422.196 151.398 422.378 151.398C422.559 151.398 422.68 151.447 422.764 151.543C422.861 151.628 422.909 151.737 422.933 151.87C422.946 152.003 422.921 152.16 422.849 152.317L417.532 164.738C417.448 164.931 417.351 165.052 417.242 165.125C417.146 165.197 417.013 165.221 416.832 165.221L416.856 165.233Z" fill="white" />
                    <path d="M474.587 161.938C474.347 161.938 474.152 161.742 474.152 161.499V150.585C474.152 150.343 474.347 150.146 474.587 150.146H476.285C476.525 150.146 476.719 150.343 476.719 150.585V159.747H481.683C481.923 159.747 482.118 159.944 482.118 160.186V161.499C482.118 161.742 481.923 161.938 481.683 161.938H474.587Z" fill="white" />
                    <path d="M486.179 162.122C485.573 162.122 485.037 162.005 484.573 161.771C484.11 161.537 483.74 161.219 483.464 160.818C483.199 160.416 483.066 159.965 483.066 159.463C483.066 158.872 483.221 158.398 483.53 158.041C483.839 157.684 484.341 157.433 485.037 157.288C485.732 157.132 486.654 157.054 487.803 157.054H488.117C488.273 157.054 488.398 156.927 488.398 156.77C488.398 156.279 488.288 155.934 488.067 155.733C487.847 155.521 487.471 155.415 486.941 155.415C486.5 155.415 486.031 155.488 485.534 155.633C485.195 155.726 484.855 155.855 484.515 156.019C484.279 156.134 483.989 156.033 483.89 155.788L483.532 154.897C483.454 154.702 483.522 154.478 483.705 154.378C483.924 154.259 484.169 154.148 484.441 154.044C484.86 153.888 485.296 153.77 485.749 153.692C486.202 153.603 486.632 153.559 487.041 153.559C488.299 153.559 489.238 153.849 489.856 154.428C490.474 154.997 490.783 155.883 490.783 157.088V161.499C490.783 161.742 490.589 161.938 490.349 161.938H488.883C488.643 161.938 488.448 161.742 488.448 161.499V160.701C488.283 161.135 488.001 161.481 487.604 161.738C487.218 161.994 486.743 162.122 486.179 162.122ZM486.743 160.433C487.206 160.433 487.598 160.271 487.919 159.948C488.239 159.625 488.398 159.206 488.398 158.693C488.398 158.509 488.25 158.359 488.067 158.359H487.819C486.969 158.359 486.367 158.437 486.014 158.593C485.661 158.738 485.484 158.995 485.484 159.363C485.484 159.675 485.589 159.931 485.799 160.132C486.02 160.333 486.334 160.433 486.743 160.433Z" fill="white" />
                    <path d="M493.872 164.95C493.556 164.95 493.345 164.62 493.476 164.329L494.754 161.487L491.673 154.341C491.548 154.051 491.759 153.727 492.072 153.727H493.746C493.924 153.727 494.085 153.837 494.15 154.004L496.078 158.945L498.071 154C498.138 153.835 498.297 153.727 498.474 153.727H499.998C500.312 153.727 500.522 154.053 500.395 154.343L495.862 164.688C495.792 164.847 495.636 164.95 495.464 164.95H493.872Z" fill="white" />
                    <path d="M505.425 162.122C504.465 162.122 503.636 161.949 502.941 161.604C502.257 161.247 501.726 160.751 501.351 160.115C500.987 159.468 500.805 158.71 500.805 157.84C500.805 156.993 500.981 156.251 501.334 155.616C501.699 154.969 502.19 154.467 502.808 154.111C503.438 153.743 504.161 153.559 504.978 153.559C506.159 153.559 507.097 153.938 507.793 154.696C508.488 155.443 508.836 156.458 508.836 157.74V157.937C508.836 158.179 508.642 158.376 508.402 158.376H503.189C503.278 159.022 503.509 159.496 503.885 159.797C504.271 160.087 504.801 160.232 505.475 160.232C505.916 160.232 506.363 160.165 506.816 160.032C507.079 159.954 507.327 159.851 507.561 159.725C507.814 159.587 508.146 159.68 508.252 159.95L508.582 160.792C508.654 160.975 508.597 161.186 508.432 161.292C508.079 161.518 507.667 161.705 507.197 161.855C506.612 162.033 506.021 162.122 505.425 162.122ZM505.077 155.231C504.547 155.231 504.117 155.393 503.785 155.716C503.465 156.04 503.267 156.491 503.189 157.071H506.766C506.7 155.844 506.137 155.231 505.077 155.231Z" fill="white" />
                    <path d="M510.724 161.938C510.483 161.938 510.289 161.742 510.289 161.499V154.165C510.289 153.922 510.483 153.726 510.724 153.726H512.305C512.545 153.726 512.74 153.922 512.74 154.165V155.148C513.126 154.189 513.954 153.659 515.224 153.559L515.52 153.538C515.759 153.522 515.966 153.704 515.983 153.945L516.072 155.21C516.088 155.446 515.917 155.652 515.684 155.677L514.694 155.783C513.457 155.906 512.839 156.541 512.839 157.69V161.499C512.839 161.742 512.645 161.938 512.405 161.938H510.724Z" fill="white" />
                    <path d="M520.147 162.122C519.429 162.122 518.761 162.039 518.143 161.871C517.659 161.741 517.24 161.572 516.885 161.366C516.714 161.267 516.65 161.056 516.718 160.869L517.015 160.053C517.11 159.791 517.419 159.685 517.666 159.806C517.952 159.946 518.26 160.066 518.59 160.165C519.12 160.31 519.644 160.383 520.163 160.383C520.627 160.383 520.969 160.31 521.19 160.165C521.411 160.009 521.521 159.809 521.521 159.563C521.521 159.173 521.24 158.928 520.676 158.827L518.938 158.509C518.243 158.387 517.712 158.136 517.348 157.757C516.984 157.378 516.802 156.881 516.802 156.268C516.802 155.711 516.956 155.231 517.265 154.83C517.574 154.428 518 154.116 518.54 153.893C519.081 153.67 519.705 153.559 520.412 153.559C520.997 153.559 521.565 153.637 522.117 153.793C522.555 153.908 522.944 154.079 523.284 154.305C523.442 154.411 523.494 154.617 523.425 154.795L523.118 155.586C523.014 155.855 522.685 155.951 522.433 155.818C522.216 155.703 521.978 155.602 521.72 155.516C521.267 155.359 520.842 155.281 520.445 155.281C519.948 155.281 519.589 155.365 519.368 155.532C519.148 155.688 519.037 155.889 519.037 156.134C519.037 156.525 519.297 156.77 519.816 156.87L521.554 157.188C522.272 157.311 522.818 157.556 523.194 157.924C523.569 158.281 523.757 158.772 523.757 159.396C523.757 160.255 523.426 160.924 522.763 161.403C522.101 161.883 521.229 162.122 520.147 162.122Z" fill="white" />
                    <path d="M527.615 161.939C527.439 161.939 527.28 161.831 527.213 161.666L524.255 154.331C524.139 154.042 524.349 153.727 524.658 153.727H526.243C526.424 153.727 526.587 153.841 526.65 154.013L528.483 158.995L530.315 154.013C530.378 153.841 530.541 153.727 530.722 153.727H531.773C531.955 153.727 532.118 153.841 532.181 154.014L534.013 159.062L535.847 154.014C535.909 153.841 536.072 153.727 536.254 153.727H537.708C538.016 153.727 538.227 154.041 538.111 154.33L535.183 161.664C535.117 161.83 534.957 161.939 534.78 161.939H533.252C533.072 161.939 532.911 161.828 532.846 161.659L531.165 157.272L529.532 161.655C529.469 161.826 529.307 161.939 529.126 161.939H527.615Z" fill="white" />
                    <path d="M541.875 162.122C541.268 162.122 540.732 162.005 540.269 161.771C539.805 161.537 539.435 161.219 539.159 160.818C538.894 160.416 538.762 159.965 538.762 159.463C538.762 158.872 538.916 158.398 539.225 158.041C539.535 157.684 540.037 157.433 540.732 157.288C541.428 157.132 542.35 157.054 543.498 157.054H544.094V156.77C544.094 156.279 543.984 155.934 543.763 155.733C543.542 155.521 543.167 155.415 542.637 155.415C542.195 155.415 541.726 155.488 541.229 155.633C540.89 155.726 540.55 155.855 540.211 156.019C539.974 156.134 539.684 156.033 539.586 155.788L539.227 154.897C539.15 154.702 539.218 154.478 539.401 154.378C539.619 154.259 539.864 154.148 540.136 154.044C540.556 153.888 540.992 153.77 541.444 153.692C541.897 153.603 542.327 153.559 542.736 153.559C543.995 153.559 544.933 153.849 545.551 154.428C546.17 154.997 546.479 155.883 546.479 157.088V161.499C546.479 161.742 546.284 161.938 546.044 161.938H544.578C544.338 161.938 544.144 161.742 544.144 161.499V160.701C543.978 161.135 543.697 161.481 543.299 161.738C542.913 161.994 542.438 162.122 541.875 162.122ZM542.438 160.433C542.902 160.433 543.294 160.271 543.614 159.948C543.934 159.625 544.094 159.206 544.094 158.693V158.359H543.514C542.664 158.359 542.063 158.437 541.709 158.593C541.356 158.738 541.179 158.995 541.179 159.363C541.179 159.675 541.285 159.931 541.494 160.132C541.715 160.333 542.03 160.433 542.438 160.433Z" fill="white" />
                    <path d="M548.779 164.949C548.538 164.949 548.344 164.752 548.344 164.51V154.165C548.344 153.922 548.538 153.726 548.779 153.726H550.36C550.6 153.726 550.795 153.922 550.795 154.165V154.947C551.015 154.523 551.352 154.189 551.805 153.943C552.269 153.687 552.787 153.559 553.361 153.559C554.068 153.559 554.686 153.731 555.216 154.077C555.757 154.423 556.177 154.913 556.475 155.549C556.773 156.185 556.922 156.943 556.922 157.824C556.922 158.705 556.773 159.468 556.475 160.115C556.177 160.751 555.757 161.247 555.216 161.604C554.686 161.949 554.068 162.122 553.361 162.122C552.821 162.122 552.324 162.005 551.871 161.771C551.43 161.537 551.087 161.225 550.844 160.834V164.51C550.844 164.752 550.65 164.949 550.41 164.949H548.779ZM552.616 160.232C553.146 160.232 553.577 160.037 553.908 159.647C554.239 159.257 554.405 158.649 554.405 157.824C554.405 157.01 554.239 156.413 553.908 156.034C553.577 155.644 553.146 155.449 552.616 155.449C552.075 155.449 551.639 155.644 551.308 156.034C550.977 156.413 550.811 157.01 550.811 157.824C550.811 158.649 550.977 159.257 551.308 159.647C551.639 160.037 552.075 160.232 552.616 160.232Z" fill="white" />
                    <path opacity="0.6" d="M438.781 145.572C438.781 144.399 439.732 143.448 440.905 143.448H459.226C460.399 143.448 461.35 144.399 461.35 145.572V163.893C461.35 165.066 460.399 166.017 459.226 166.017H440.905C439.732 166.017 438.781 165.066 438.781 163.893V145.572Z" fill="white" />
                    <path opacity="0.5" d="M442.949 149.741C442.949 148.568 443.9 147.617 445.073 147.617H463.394C464.567 147.617 465.518 148.568 465.518 149.741V168.062C465.518 169.235 464.567 170.186 463.394 170.186H445.073C443.9 170.186 442.949 169.235 442.949 168.062V149.741Z" fill="white" />
                    <path opacity="0.9" d="M434.613 141.402C434.613 140.229 435.564 139.278 436.737 139.278H455.058C456.231 139.278 457.182 140.229 457.182 141.402V159.723C457.182 160.896 456.231 161.847 455.058 161.847H436.737C435.564 161.847 434.613 160.896 434.613 159.723V141.402Z" fill="white" />
                </>}
            </svg>
        </>
    )
})

export default DevhacksLogo;