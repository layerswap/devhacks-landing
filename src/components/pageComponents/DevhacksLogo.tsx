import { FC } from "react";

interface Props {
    className?: string
}

const DevhacksLogo: FC<Props> = (({ className }) => {
    return (
        <>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" width="159" height="49" viewBox="0 0 159 49" fill="none">
                <path d="M3.41182 18.2997C4.59804 18.2997 5.56015 17.3376 5.56015 16.1514V14.5942C5.56015 10.5487 8.00214 7.93671 12.1326 7.93671C16.2632 7.93671 18.7051 10.5487 18.7051 14.5942V31.4872C18.7051 32.6734 19.6672 33.6355 20.8535 33.6355H22.117C23.3032 33.6355 24.2653 32.6734 24.2653 31.4872V14.7604C24.2653 7.17552 19.5475 2.96387 12.1326 2.96387C4.71782 2.96387 0 7.17552 0 14.7604V16.1514C0 17.3376 0.962111 18.2997 2.14833 18.2997H3.41182Z" fill="#FF0093" />
                <path d="M3.24033 0.905018C2.47528 -0.288927 2.44437 -0.157555 2.17776 0.472261C1.86865 1.2064 1.86092 2.12987 1.84933 2.91038C1.83001 4.06182 1.97297 5.61897 2.54869 6.64291C3.10896 7.63979 4.39564 6.9327 4.97136 6.40721C5.77891 5.67307 6.09189 4.71869 5.4273 3.75271C5.4273 3.75271 4.00152 2.0951 3.24033 0.901154V0.905018Z" fill="#FF0093" />
                <path d="M22.0957 0.472261C21.829 -0.157555 21.7981 -0.288927 21.0331 0.905018C20.2719 2.09896 18.8461 3.75658 18.8461 3.75658C18.1815 4.72641 18.4906 5.6808 19.3021 6.41107C19.8816 6.93656 21.1683 7.64366 21.7247 6.64677C22.3004 5.62284 22.4395 4.06182 22.4241 2.91425C22.4125 2.13374 22.4048 1.21027 22.0957 0.476125V0.472261Z" fill="#FF0093" />
                <path d="M61.3635 33.906C60.5637 33.906 59.9454 33.6858 59.5049 33.2492C59.0915 32.7855 58.8867 32.1518 58.8867 31.352V8.55111C58.8867 7.72423 59.0915 7.09442 59.5049 6.65393C59.9454 6.21345 60.5637 5.99707 61.3635 5.99707C62.1633 5.99707 62.7699 6.21731 63.1834 6.65393C63.6239 7.09442 63.8402 7.72423 63.8402 8.55111V17.6854H77.8932V8.55111C77.8932 7.72423 78.098 7.09442 78.5115 6.65393C78.9519 6.21345 79.5702 5.99707 80.37 5.99707C81.1698 5.99707 81.7765 6.21731 82.1899 6.65393C82.6304 7.09442 82.8468 7.72423 82.8468 8.55111V31.352C82.8468 32.1518 82.6265 32.7855 82.1899 33.2492C81.7765 33.6896 81.1698 33.906 80.37 33.906C79.5702 33.906 78.9519 33.6858 78.5115 33.2492C78.098 32.7855 77.8932 32.1518 77.8932 31.352V21.8313H63.8402V31.352C63.8402 32.1518 63.6355 32.7855 63.222 33.2492C62.8086 33.6896 62.1904 33.906 61.3635 33.906Z" fill="#FF0093" />
                <path d="M92.6607 33.9833C91.2928 33.9833 90.068 33.7244 88.9822 33.2105C87.9235 32.6695 87.085 31.947 86.4668 31.0428C85.8718 30.1387 85.5781 29.1186 85.5781 27.9865C85.5781 26.5916 85.9375 25.4981 86.6639 24.6945C87.3864 23.8676 88.5611 23.2764 90.1878 22.9132C91.8145 22.5539 93.9937 22.3723 96.7293 22.3723H98.6651V25.1581H96.768C95.1683 25.1581 93.8894 25.2354 92.935 25.39C91.9806 25.5445 91.2967 25.815 90.8833 26.2014C90.4969 26.5646 90.3037 27.0785 90.3037 27.7508C90.3037 28.6009 90.6012 29.3002 91.1924 29.8412C91.7874 30.3821 92.6104 30.6526 93.6691 30.6526C94.5192 30.6526 95.2688 30.4594 95.9141 30.073C96.5864 29.6596 97.1157 29.107 97.5021 28.4077C97.8885 27.7122 98.0817 26.9123 98.0817 26.0082V21.557C98.0817 20.2664 97.7996 19.3391 97.2316 18.7711C96.6636 18.2031 95.7093 17.921 94.3685 17.921C93.6189 17.921 92.8075 18.0099 91.9304 18.1915C91.0803 18.3731 90.1762 18.6822 89.2218 19.1189C88.7311 19.3507 88.2944 19.4164 87.9042 19.312C87.541 19.2077 87.2589 19.0029 87.0541 18.6938C86.8493 18.3577 86.745 17.9983 86.745 17.6081C86.745 17.2178 86.8493 16.8469 87.0541 16.4837C87.2589 16.0973 87.6105 15.8114 88.0974 15.6336C89.2836 15.1429 90.4196 14.7951 91.5053 14.5904C92.6143 14.3856 93.6228 14.2812 94.523 14.2812C96.3816 14.2812 97.904 14.5633 99.0902 15.1313C100.303 15.6993 101.208 16.5648 101.799 17.724C102.394 18.86 102.687 20.3321 102.687 22.1366V31.4254C102.687 32.2252 102.494 32.8434 102.108 33.2839C101.721 33.6973 101.165 33.9021 100.443 33.9021C99.72 33.9021 99.152 33.6973 98.7386 33.2839C98.3522 32.8434 98.159 32.2252 98.159 31.4254V29.5668H98.4681C98.2865 30.471 97.9271 31.2554 97.3823 31.9277C96.8646 32.5729 96.2077 33.0753 95.4079 33.4385C94.6081 33.8017 93.6923 33.9794 92.6607 33.9794V33.9833Z" fill="#FF0093" />
                <path d="M114.799 33.9833C112.813 33.9833 111.082 33.5814 109.614 32.7816C108.141 31.9547 107.005 30.7956 106.206 29.2964C105.406 27.801 105.004 26.043 105.004 24.0337C105.004 22.5114 105.224 21.1551 105.661 19.9689C106.124 18.7556 106.785 17.7356 107.635 16.9126C108.485 16.0625 109.521 15.4172 110.734 14.9768C111.947 14.5131 113.3 14.2812 114.799 14.2812C115.649 14.2812 116.565 14.3972 117.546 14.629C118.551 14.8608 119.494 15.2472 120.371 15.792C120.784 16.0509 121.055 16.36 121.182 16.7194C121.31 17.0826 121.337 17.4535 121.259 17.8438C121.182 18.207 121.012 18.5277 120.757 18.8097C120.525 19.0686 120.228 19.2348 119.868 19.312C119.505 19.3623 119.107 19.2734 118.667 19.0416C118.099 18.7054 117.519 18.462 116.924 18.3074C116.329 18.1258 115.761 18.037 115.22 18.037C114.37 18.037 113.62 18.1799 112.975 18.462C112.33 18.7209 111.773 19.1073 111.31 19.625C110.869 20.1157 110.537 20.734 110.301 21.4836C110.069 22.2332 109.954 23.0948 109.954 24.0762C109.954 25.985 110.406 27.4958 111.31 28.6047C112.237 29.6905 113.543 30.2314 115.22 30.2314C115.761 30.2314 116.317 30.1541 116.885 29.9996C117.48 29.845 118.072 29.5977 118.667 29.2655C119.103 29.0336 119.494 28.9563 119.83 29.0336C120.189 29.1109 120.487 29.2925 120.718 29.5746C120.95 29.8334 121.093 30.1541 121.143 30.5405C121.194 30.9037 121.143 31.2631 120.989 31.6263C120.861 31.9895 120.602 32.2832 120.216 32.515C119.366 33.0328 118.462 33.4037 117.507 33.6394C116.553 33.8712 115.649 33.9871 114.799 33.9871V33.9833Z" fill="#FF0093" />
                <path d="M126.321 33.906C125.549 33.906 124.954 33.7012 124.54 33.2878C124.127 32.8473 123.922 32.2291 123.922 31.4293V8.43519C123.922 7.63536 124.127 7.02873 124.54 6.61529C124.954 6.20186 125.545 5.99707 126.321 5.99707C127.098 5.99707 127.689 6.20186 128.103 6.61529C128.539 7.02873 128.759 7.63536 128.759 8.43519V22.72H128.837L135.224 15.9852C135.742 15.4675 136.19 15.0695 136.58 14.7836C136.966 14.5015 137.496 14.3585 138.168 14.3585C138.84 14.3585 139.343 14.5402 139.679 14.8995C140.038 15.2357 140.22 15.6491 140.22 16.1398C140.22 16.6305 139.988 17.1212 139.524 17.612L132.79 24.7331V22.72L140.181 30.6951C140.645 31.1858 140.853 31.6881 140.799 32.2059C140.772 32.6966 140.568 33.1101 140.181 33.4462C139.795 33.7553 139.304 33.9099 138.709 33.9099C137.986 33.9099 137.407 33.7669 136.966 33.4848C136.553 33.2028 136.089 32.7739 135.572 32.2059L128.837 25.162H128.759V31.4331C128.759 33.083 127.948 33.9099 126.321 33.9099V33.906Z" fill="#FF0093" />
                <path d="M150.915 33.9833C149.806 33.9833 148.631 33.8674 147.391 33.6356C146.151 33.4037 145.042 33.0019 144.06 32.4339C143.647 32.175 143.35 31.8775 143.172 31.5452C143.017 31.1859 142.952 30.8342 142.979 30.5019C143.029 30.1426 143.16 29.8296 143.365 29.5746C143.597 29.3157 143.883 29.1496 144.215 29.0723C144.574 28.995 144.965 29.0607 145.378 29.2655C146.41 29.7562 147.376 30.104 148.28 30.3087C149.184 30.4903 150.073 30.5792 150.95 30.5792C152.19 30.5792 153.106 30.3744 153.697 29.961C154.315 29.5205 154.624 28.9564 154.624 28.257C154.624 27.662 154.416 27.2138 154.006 26.9008C153.62 26.5646 153.025 26.3212 152.225 26.1666L148.353 25.4325C146.754 25.1234 145.529 24.5438 144.675 23.6899C143.848 22.8128 143.435 21.6884 143.435 20.3206C143.435 19.0803 143.771 18.01 144.439 17.1097C145.135 16.2055 146.089 15.51 147.302 15.0193C148.516 14.5286 149.907 14.2852 151.483 14.2852C152.619 14.2852 153.678 14.4127 154.655 14.6715C155.66 14.9034 156.63 15.2782 157.557 15.7959C157.943 16.0007 158.202 16.2751 158.33 16.6074C158.484 16.9435 158.523 17.2913 158.446 17.6506C158.368 17.9868 158.214 18.2959 157.982 18.5779C157.75 18.8368 157.453 19.003 157.093 19.0803C156.757 19.1305 156.371 19.0532 155.93 18.8484C155.131 18.435 154.358 18.1375 153.608 17.9597C152.886 17.7781 152.19 17.6893 151.518 17.6893C150.254 17.6893 149.312 17.9095 148.693 18.3461C148.098 18.7866 147.805 19.3662 147.805 20.0887C147.805 20.6297 147.986 21.0818 148.346 21.445C148.705 21.8082 149.261 22.0516 150.011 22.1791L153.883 22.9132C155.559 23.2224 156.823 23.7903 157.677 24.6172C158.554 25.4441 158.994 26.553 158.994 27.9479C158.994 29.8335 158.26 31.3172 156.788 32.3991C155.316 33.4578 153.357 33.9872 150.903 33.9872L150.915 33.9833Z" fill="#FF0093" />
                <path d="M31.2118 17.9717C27.0349 18.5783 23.1903 20.3441 22.0234 22.0945L24.2684 29.2234C24.3688 25.8038 27.7111 23.7173 31.2157 22.8904V17.9717H31.2118Z" fill="#FF0093" />
                <path d="M81.131 48.164C81.1194 48.0983 81.0769 47.8703 81.0073 47.5419L80.9996 47.5341C80.818 46.6339 80.4123 44.9067 79.825 42.9593C79.2261 40.9771 78.434 38.7786 77.4564 37.0205C77.1589 36.4873 76.8537 35.9927 76.5252 35.5483C76.5252 35.5483 76.6605 36.5182 76.39 37.9362C76.3475 38.2067 76.2857 38.4926 76.2084 38.7786C76.1968 38.8365 76.1736 38.9022 76.1543 38.9486C75.9727 39.6672 75.6674 40.4362 75.2231 41.2437C75.196 41.2978 75.1613 41.348 75.1304 41.4021C73.6505 40.3318 69.1954 38.4656 62.9282 38.4656C61.5719 38.4656 60.1307 38.5544 58.6199 38.7554C52.4106 39.5822 42.8861 43.1602 36.9396 43.1602C33.7209 43.1602 31.5533 42.1131 31.5263 39.0181C31.4683 32.6156 47.7894 31.5106 43.4155 22.3995C42.4688 20.425 40.8189 19.1809 38.8445 18.4854V23.69C39.0415 23.9064 39.1806 24.146 39.2425 24.4164C39.6366 26.1668 38.6088 27.8824 32.7163 30.2896C27.7899 32.2988 26.2134 36.2322 26.5264 39.4779C26.7118 41.3867 28.5201 47.283 37.5539 47.283C46.5877 47.283 49.7832 42.2251 62.8316 41.2167C63.3648 41.1742 63.8864 41.1549 64.3964 41.1549C68.7395 41.1549 72.0547 42.5574 73.6698 43.4114C73.5732 43.5196 73.4843 43.6239 73.38 43.7321C72.7927 44.3232 72.1088 44.9067 71.2819 45.4438C71.1699 45.5288 71.0655 45.6022 70.9419 45.6795C70.2155 46.147 69.3886 46.5875 68.4497 46.9893C68.4497 46.9893 68.9945 47.0434 69.8755 47.1246C72.3484 47.3564 77.468 47.8355 80.2307 48.1099C80.5707 48.1408 80.8721 48.1678 81.131 48.1949C81.131 48.1949 81.1284 48.1859 81.1233 48.1678L81.131 48.164Z" fill="#FF0093" />
                <path d="M37.769 25.9888H37.7768C37.7188 25.6179 37.684 25.2161 37.684 24.7833V6.99391C37.684 5.74973 36.6756 4.74512 35.4352 4.74512H34.6277C33.3835 4.74512 32.3789 5.7536 32.3789 6.99391V25.2083C32.3789 26.5607 32.603 27.7971 33.0164 28.8984C33.1903 28.8327 36.4901 27.546 37.7729 25.9927L37.769 25.9888Z" fill="#FF0093" />
                <path d="M54.4386 29.134H52.5994V19.3777C52.5994 18.1335 51.5909 17.1289 50.3506 17.1289H49.5431C48.2989 17.1289 47.2943 18.1374 47.2943 19.3777V23.3536C47.2943 26.4718 46.0656 28.5506 43.8941 29.2461C43.8941 29.2461 42.789 31.0351 38.1484 33.6548C38.8826 33.8557 39.6708 33.9678 40.5093 33.9678C44.2573 33.9678 45.9458 32.3256 46.6181 30.8921H47.3754V31.9006C47.3754 32.855 48.1482 33.6316 49.1065 33.6316H52.6033H54.4425C55.6867 33.6316 56.6913 32.6231 56.6913 31.3828C56.6913 30.1425 55.6828 29.134 54.4425 29.134H54.4386Z" fill="#FF0093" />
            </svg>
        </>
    )
})

export default DevhacksLogo;