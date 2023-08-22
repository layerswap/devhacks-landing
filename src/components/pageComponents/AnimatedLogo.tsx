import useWindowDimensions from '@/hooks/useWindowDimensions';
import $ from 'jquery';
import { useEffect, useState } from 'react';

const AnimatedLogo = () => {
    const [isClient, setIsClient] = useState(false)
    const { width } = useWindowDimensions()

    if (typeof document !== 'undefined' && isClient) {
        $(function () {

            const start = $('#start')?.offset()?.top
            const end = $('#end')?.offset()?.top
            const logo = $('#animatedLogo')

            if (start && end) {
                logo.height(end - start);
                logo.css('opacity', '1')
            }

            $(window).on('scroll', function () {
                drawLine(document.getElementById('path'));

                positionTail();
            });

            // init the line length
            drawLine(document.getElementById('path'));

            positionTail();


            //draw the line
            function drawLine(line: any) {
                if (typeof document !== 'undefined' && typeof window !== 'undefined') {
                    var scrollY = window.scrollY;
                    var maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
                    var pathLength = line.getTotalLength(),
                        percentDone = scrollY / maxScrollY,
                        length = percentDone * pathLength;
                    line.style.strokeDasharray = [length, pathLength].join(' ');
                    line.style.stroke = "#974DF7"
                }
            }

            function positionTail() {
                var scrollY = window.scrollY;
                var maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
                var getPathById = document.getElementById("path") as any
                var path: SVGGeometryElement = getPathById;
                // Calculate distance along the path the car should be for the current scroll amount
                var pathLen = path?.getTotalLength();
                var dist = pathLen * scrollY / maxScrollY;
                if (dist > pathLen) dist = pathLen;
                if (isFinite(parseFloat(dist.toString()))) {
                    var pos = path?.getPointAtLength(dist);

                    // Calculate position a little ahead of the car (or behind if we are at the end), so we can calculate car angle
                    if (dist + 1 <= pathLen) {
                        var posAhead = path?.getPointAtLength(dist + 1);
                        var angle = Math.atan2(posAhead.y - pos.y, posAhead.x - pos.x);

                    } else {
                        var posBehind = path?.getPointAtLength(dist - 1);
                        var angle = Math.atan2(pos.y - posBehind.y, pos.x - posBehind.x);
                    }
                    // Position the car at "pos" totated by "angle"
                    var tail = document.getElementById("tail");
                    tail?.setAttribute("transform", "translate(" + (pos.x) + "," + (pos.y) + ") rotate(" + (rad2deg(angle)) + ")");
                }

            }

            function rad2deg(rad: number) {
                return 180 * rad / Math.PI;
            }

        });
    }

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className={`${width <= 380 ? 'top-[25vh]' : 'top-[30vh]'} absolute flex justify-center right-0 -z-10 h-full w-full`} id="route">
            {typeof document !== 'undefined' && isClient &&
                width <= 768 ?
                <svg style={{ opacity: 0 }} id='animatedLogo' xmlns="http://www.w3.org/2000/svg" width="457" height="5142" viewBox="0 0 457 5160" fill="none">
                    <path d="M117.582 81.1096C117.422 80.1396 117.342 79.0896 117.342 77.9596V26.0996H103.602V79.0596C103.602 82.5696 104.172 85.7896 105.252 88.6296C112.782 85.3996 116.142 82.9396 117.582 81.1096Z" fill="#974DF7" />
                    <path d="M133.302 89.6494C129.672 94.2094 124.012 97.6294 118.512 100.929C120.412 101.459 122.472 101.739 124.652 101.739C134.352 101.739 138.722 97.4794 140.462 93.7794H142.422V100.859H166.522V89.2194H155.942V58.1494H142.202V74.2594C142.202 82.3394 139.022 87.7294 133.402 89.5194C133.372 89.5594 133.332 89.6094 133.302 89.6494Z" fill="#974DF7" />
                    <path d="M34.2035 51.5802V61.1802H19.8125V52.0202C19.8125 32.3902 32.0235 21.4902 51.2135 21.4902C70.4035 21.4902 82.6125 32.3902 82.6125 52.0202V66.1653C87.2315 63.5287 93.7465 61.3259 100.603 60.3301V73.0601C91.5335 75.2 82.8825 80.6001 82.6235 89.4501L82.6125 89.4183V100.87H68.2225V51.5802C68.2225 41.1102 61.9035 34.3502 51.2135 34.3502C40.5235 34.3502 34.2035 41.1102 34.2035 51.5802Z" fill="#974DF7" />
                    <path d="M170.91 26.0996H185.3V56.0596H213.65V26.0996H228.04V100.87H213.65V69.1396H185.3V100.87H170.91V26.0996Z" fill="#FFFDF8" />
                    <path d="M235.031 85.0605C235.031 73.9405 243.751 68.1605 255.971 68.1605H270.801V65.1105C270.801 60.0905 267.751 56.3905 260.771 56.3905C253.791 56.3905 250.851 59.8805 249.871 64.7905L237.221 60.5405C239.841 52.3605 246.931 45.2705 260.991 45.2705C275.051 45.2705 284.111 52.5805 284.111 66.1005V86.2705C284.111 88.4505 285.201 89.5405 287.161 89.5405H291.521V100.881H282.361C277.021 100.881 273.091 98.0505 273.091 93.6805V93.5705H271.021C270.041 96.3005 266.661 102.401 255.321 102.401C243.981 102.401 235.041 96.1905 235.041 85.0605H235.031ZM270.791 79.5005V78.4105H256.941C251.821 78.4105 248.761 80.7005 248.761 84.6205C248.761 88.5405 251.811 91.2705 257.701 91.2705C265.331 91.2705 270.781 86.6905 270.781 79.4905L270.791 79.5005Z" fill="#FFFDF8" />
                    <path d="M293.48 74.5898V73.0598C293.48 55.3998 305.8 45.2598 321.5 45.2598C337.2 45.2598 346.03 54.1998 348.32 66.1998L335.021 69.0298C334.151 62.4898 330.111 57.4698 321.831 57.4698C313.551 57.4698 307.22 63.0298 307.22 73.2798V74.3698C307.22 84.6198 313.541 90.1798 321.831 90.1798C330.121 90.1798 334.15 85.4898 335.35 78.5098L348.651 81.6698C345.821 93.3398 336.98 102.39 321.5 102.39C306.02 102.39 293.48 92.2498 293.48 74.5898Z" fill="#FFFDF8" />
                    <path d="M369.371 24.54V66.74H371.331L389.211 46.79H407.091L382.121 72.96L407.961 100.87H390.291L371.321 79.39H369.361V100.87H355.621V24.54H369.371Z" fill="#FFFDF8" />
                    <path d="M408.191 84.73L420.841 81.46C422.261 89.09 427.381 91.49 433.711 91.49C440.041 91.49 443.091 88.98 443.091 85.6C443.091 82.22 440.361 80.69 433.931 79.49L430.881 78.94C419.541 76.87 410.161 72.62 410.161 61.93C410.161 51.24 418.671 45.25 431.531 45.25C443.631 45.25 451.921 51.14 454.431 59.86L441.671 63.79C440.471 58.23 436.761 56.16 431.531 56.16C426.301 56.16 423.461 58.12 423.461 61.28C423.461 64.77 426.511 66.19 431.531 67.06L434.581 67.61C446.791 69.79 456.391 73.28 456.391 84.62C456.391 95.96 447.451 102.39 433.711 102.39C419.971 102.39 410.051 96.07 408.191 84.73Z" fill="#FFFDF8" />
                    <path d="M35.8916 28.43C34.2116 27.73 32.9216 26.61 31.7116 25.25C30.2816 23.97 28.5316 21.96 27.2016 18.8C25.5316 14.82 23.6216 8.26 26.3316 0.04V0C26.3316 0 26.3416 -1.86265e-08 26.3316 0.02C26.2616 0.11 26.0016 0.45 25.5716 1.1C24.4416 2.77 21.8216 6.82 20.4616 11.51C17.1016 23.09 19.7416 30.51 26.2616 38.13C26.9616 38.95 27.7716 39.75 28.7416 40.54C28.7616 40.52 28.7616 40.51 28.7816 40.49C28.7916 40.54 28.7816 40.6 28.7816 40.6C29.9416 40.96 31.1016 40.35 32.2816 39.34C32.9516 38.76 33.6416 38.25 34.4916 37.39C34.4916 37.37 34.5116 37.36 34.5116 37.36C34.8716 36.95 35.2416 36.49 35.5816 36.05C36.3816 35.01 37.0416 34.03 37.5316 33.22C39.5816 29.86 38.7016 29.43 38.5316 29.19C37.5616 28.98 36.6616 28.76 35.8816 28.43H35.8916Z" fill="#974DF7" />
                    <path d="M65.7309 28.43C67.4109 27.73 68.7009 26.61 69.9109 25.25C71.3409 23.97 73.0909 21.96 74.4209 18.8C76.0909 14.82 78.0009 8.25 75.2909 0.04V0C75.2909 0 75.2709 -1.86265e-08 75.2909 0.02C75.3609 0.11 75.6209 0.45 76.0509 1.1C77.1809 2.77 79.8009 6.82 81.1609 11.51C84.5209 23.09 81.8809 30.51 75.3609 38.13C74.6609 38.95 73.8509 39.75 72.8809 40.54C72.8609 40.52 72.8609 40.51 72.8409 40.49C72.8309 40.54 72.8409 40.6 72.8409 40.6C71.6809 40.96 70.5209 40.35 69.3409 39.34C68.6709 38.76 67.9809 38.25 67.1309 37.39C67.1309 37.37 67.1109 37.36 67.1109 37.36C66.7509 36.95 66.3809 36.49 66.0409 36.05C65.2409 35.01 64.5809 34.03 64.0909 33.22C62.0409 29.86 62.9209 29.43 63.0909 29.19C64.0609 28.98 64.9609 28.76 65.7409 28.43H65.7309Z" fill="#974DF7" />
                    <path d="M184.198 110.24C200.418 110.24 211.959 115.08 215.779 117.85L212.008 123.03C207.828 120.82 199.248 117.19 188.008 117.19C186.688 117.19 185.338 117.24 183.958 117.35C150.188 119.96 141.918 133.05 118.538 133.05C95.1585 133.05 90.4785 117.8 89.9985 112.86C89.1985 104.62 93.0985 94.6898 105.248 89.3998C105.498 89.2898 105.748 89.1898 106.008 89.0798L106.668 88.8098C107.128 88.6198 107.568 88.4298 108.008 88.2398C113.978 85.6798 117.768 83.4198 120.058 81.3198C120.488 80.9298 120.858 80.5498 121.188 80.1698C121.638 79.6398 121.999 79.1298 122.279 78.6198C123.179 76.9998 123.258 75.4498 122.908 73.8798C122.748 73.1698 122.378 72.5298 121.858 71.9598V58.5098C126.978 60.3098 131.248 63.5398 133.708 68.6598C136.728 74.9498 135.928 79.7598 133.138 83.7598C132.728 84.3598 132.268 84.9398 131.758 85.4998C131.288 86.0398 130.788 86.5498 130.248 87.0598C126.498 90.5998 121.308 93.5198 116.468 96.4598C115.978 96.7598 115.488 97.0499 115.008 97.3499C114.518 97.6598 114.038 97.96 113.558 98.2599C107.648 102.06 102.888 106.08 102.938 111.67C103.008 119.68 108.618 122.39 116.948 122.39C132.328 122.39 156.978 113.13 173.048 110.99C176.968 110.47 180.698 110.24 184.198 110.24Z" fill="#974DF7" />
                    <path id='path' d="M213 120C213 120 234.998 143.779 251.198 150.665C280.666 163.191 301.46 92.81 328.859 135.933C373.915 206.844 419.2 274.851 424.74 480.471C430.124 680.314 381.171 821.108 352.136 907.689C327.666 980.655 299.107 1032.77 272.695 1086.88C242.807 1148.11 213.76 1210.95 185.363 1287.77C138.205 1415.33 70.8982 1581.07 61.0364 1871.64C57.0088 1990.29 65.4021 2070.56 82.9224 2151.74C107.117 2263.85 138.623 2349.98 169.229 2413.27C203.381 2483.89 235.555 2565.23 271.7 2609.67C302.94 2648.09 334.371 2670.11 363.922 2735.01C396.608 2806.79 448.589 2985.04 438.79 3196.63C433.971 3300.72 419.587 3370.41 399.698 3412.05C373.347 3467.2 347.248 3518.65 319.767 3559.55C278.705 3620.66 236.478 3653.04 194.476 3693.72C154.419 3732.49 115.156 3781.29 76.342 3843.26C54.2667 3878.51 23.1915 3911.26 8.48297 4009C-0.00654674 4065.41 4.86774 4143.11 12.295 4217.41C21.8739 4313.24 57.8065 4389.53 57.8065 4389.53C57.8065 4389.53 93.3763 4490.2 114.069 4509.14C178.347 4567.96 244.434 4561.6 308.432 4630.21C327.209 4650.34 420.274 4708.21 402.104 4883.67C389.318 5007.1 358.906 4965.85 330.219 5004.63C311.653 5029.72 299.283 5018.73 282.126 5059.68C271.927 5084.03 258.165 5138 258.165 5138" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="tail"
                        d="M21.2404 2.99008C21.8797 3.5785 22.3112 3.99559 22.4342 4.11675C22.468 4.14182 22.4853 4.15407 22.4853 4.15407C21.9126 4.48763 21.2282 4.88839 20.4647 5.33314C14.4665 8.74848 3.58265 15.0474 -2.18986 18.3882L-2.85205 18.7715C-4.84004 19.9274 -6.07028 20.6304 -6.07028 20.6304C-4.68441 18.3688 -3.61493 16.1973 -2.77002 14.1241C-2.63328 13.7814 -2.52333 13.4701 -2.41448 13.1228C-1.47013 10.758 -0.908466 8.49351 -0.55633 6.36576C-0.5009 5.99505 -0.467566 5.62777 -0.426081 5.25471L-0.355404 -1.15157C-0.371335 -1.31203 -0.379114 -1.47829 -0.3974 -1.6248C-0.677117 -4.00267 -1.17252 -6.07991 -1.86734 -7.86813C-1.90192 -8.00305 -1.9539 -8.16242 -2.01638 -8.30205C-2.28221 -9.02103 -2.58064 -9.71684 -2.89664 -10.3511C-4.46105 -13.7419 -6.19267 -15.5904 -6.19267 -15.5904C-4.84167 -15.14 -3.45374 -14.5686 -2.02886 -13.8762C2.67209 -11.6481 7.63776 -8.1849 11.8738 -4.90229C16.0332 -1.67565 19.4793 1.35884 21.2125 2.98537L21.2404 2.99008Z"
                        fill="#974DF7" />
                </svg>
                :
                <svg style={{ opacity: 0 }} id='animatedLogo' preserveAspectRatio='xMidYMid slice' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1291 3400" fill="none">
                    <path d="M525.582 81.3606C525.422 80.3906 525.342 79.3406 525.342 78.2106V26.3506H511.602V79.3106C511.602 82.8206 512.172 86.0406 513.252 88.8806C520.782 85.6506 524.142 83.1906 525.582 81.3606Z" fill="#974DF7" />
                    <path d="M541.302 89.9004C537.672 94.4604 532.012 97.8804 526.512 101.18C528.412 101.71 530.472 101.99 532.652 101.99C542.352 101.99 546.722 97.7304 548.462 94.0304H550.422V101.11H574.522V89.4704H563.942V58.4004H550.202V74.5104C550.202 82.5904 547.022 87.9804 541.402 89.7704C541.372 89.8104 541.332 89.8604 541.302 89.9004Z" fill="#974DF7" />
                    <path d="M442.203 51.8312V61.4312H427.812V52.2712C427.812 32.6412 440.023 21.7412 459.213 21.7412C478.403 21.7412 490.612 32.6412 490.612 52.2712V66.4163C495.231 63.7797 501.746 61.5769 508.603 60.5811V73.3111C499.533 75.451 490.882 80.8511 490.623 89.7011L490.612 89.6693V101.121H476.222V51.8312C476.222 41.3612 469.903 34.6012 459.213 34.6012C448.523 34.6012 442.203 41.3612 442.203 51.8312Z" fill="#974DF7" />
                    <path d="M578.91 26.3506H593.3V56.3106H621.65V26.3506H636.04V101.121H621.65V69.3906H593.3V101.121H578.91V26.3506Z" fill="#FFFDF8" />
                    <path d="M643.031 85.3115C643.031 74.1915 651.751 68.4115 663.971 68.4115H678.801V65.3615C678.801 60.3415 675.751 56.6415 668.771 56.6415C661.791 56.6415 658.851 60.1315 657.871 65.0415L645.221 60.7915C647.841 52.6115 654.931 45.5215 668.991 45.5215C683.051 45.5215 692.111 52.8315 692.111 66.3515V86.5215C692.111 88.7015 693.201 89.7915 695.161 89.7915H699.521V101.132H690.361C685.021 101.132 681.091 98.3015 681.091 93.9315V93.8215H679.021C678.041 96.5515 674.661 102.652 663.321 102.652C651.981 102.652 643.041 96.4415 643.041 85.3115H643.031ZM678.791 79.7515V78.6615H664.941C659.821 78.6615 656.761 80.9515 656.761 84.8715C656.761 88.7915 659.811 91.5215 665.701 91.5215C673.331 91.5215 678.781 86.9415 678.781 79.7415L678.791 79.7515Z" fill="#FFFDF8" />
                    <path d="M701.48 74.8408V73.3108C701.48 55.6508 713.8 45.5108 729.5 45.5108C745.2 45.5108 754.03 54.4508 756.32 66.4508L743.02 69.2808C742.15 62.7408 738.11 57.7208 729.83 57.7208C721.55 57.7208 715.22 63.2808 715.22 73.5308V74.6208C715.22 84.8708 721.54 90.4308 729.83 90.4308C738.12 90.4308 742.15 85.7408 743.35 78.7608L756.65 81.9208C753.82 93.5908 744.98 102.641 729.5 102.641C714.02 102.641 701.48 92.5008 701.48 74.8408Z" fill="#FFFDF8" />
                    <path d="M777.371 24.791V66.991H779.331L797.211 47.041H815.091L790.121 73.211L815.961 101.121H798.291L779.321 79.641H777.361V101.121H763.621V24.791H777.371Z" fill="#FFFDF8" />
                    <path d="M816.191 84.981L828.841 81.711C830.261 89.341 835.381 91.741 841.711 91.741C848.041 91.741 851.091 89.231 851.091 85.851C851.091 82.471 848.361 80.941 841.931 79.741L838.881 79.191C827.541 77.121 818.161 72.871 818.161 62.181C818.161 51.491 826.671 45.501 839.531 45.501C851.631 45.501 859.921 51.391 862.431 60.111L849.671 64.041C848.471 58.481 844.761 56.411 839.531 56.411C834.301 56.411 831.461 58.371 831.461 61.531C831.461 65.021 834.511 66.441 839.531 67.311L842.581 67.861C854.791 70.041 864.391 73.531 864.391 84.871C864.391 96.211 855.451 102.641 841.711 102.641C827.971 102.641 818.051 96.321 816.191 84.981Z" fill="#FFFDF8" />
                    <path d="M443.892 28.681C442.212 27.981 440.922 26.861 439.712 25.501C438.282 24.221 436.532 22.211 435.202 19.051C433.532 15.071 431.622 8.51098 434.332 0.290977V0.250977C434.332 0.250977 434.342 0.250977 434.332 0.270977C434.262 0.360977 434.002 0.700977 433.572 1.35098C432.442 3.02098 429.822 7.07098 428.462 11.761C425.102 23.341 427.742 30.761 434.262 38.381C434.962 39.201 435.772 40.001 436.742 40.791C436.762 40.771 436.762 40.761 436.782 40.741C436.792 40.791 436.782 40.851 436.782 40.851C437.942 41.211 439.102 40.601 440.282 39.591C440.952 39.011 441.642 38.501 442.492 37.641C442.492 37.621 442.512 37.611 442.512 37.611C442.872 37.201 443.242 36.741 443.582 36.301C444.382 35.261 445.042 34.281 445.532 33.471C447.582 30.111 446.702 29.681 446.532 29.441C445.562 29.231 444.662 29.011 443.882 28.681H443.892Z" fill="#974DF7" />
                    <path d="M473.731 28.681C475.411 27.981 476.701 26.861 477.911 25.501C479.341 24.221 481.091 22.211 482.421 19.051C484.091 15.071 486.001 8.50098 483.291 0.290977V0.250977C483.291 0.250977 483.271 0.250977 483.291 0.270977C483.361 0.360977 483.621 0.700977 484.051 1.35098C485.181 3.02098 487.801 7.07098 489.161 11.761C492.521 23.341 489.881 30.761 483.361 38.381C482.661 39.201 481.851 40.001 480.881 40.791C480.861 40.771 480.861 40.761 480.841 40.741C480.831 40.791 480.841 40.851 480.841 40.851C479.681 41.211 478.521 40.601 477.341 39.591C476.671 39.011 475.981 38.501 475.131 37.641C475.131 37.621 475.111 37.611 475.111 37.611C474.751 37.201 474.381 36.741 474.041 36.301C473.241 35.261 472.581 34.281 472.091 33.471C470.041 30.111 470.921 29.681 471.091 29.441C472.061 29.231 472.961 29.011 473.741 28.681H473.731Z" fill="#974DF7" />
                    <path d="M592.2 110.491C608.42 110.491 619.96 115.331 623.78 118.101L620.01 123.281C615.83 121.071 607.25 117.441 596.01 117.441C594.69 117.441 593.34 117.491 591.96 117.601C558.19 120.211 549.92 133.301 526.54 133.301C503.16 133.301 498.48 118.051 498 113.111C497.2 104.871 501.1 94.9405 513.25 89.6505C513.5 89.5405 513.75 89.4405 514.01 89.3305L514.67 89.0605C515.13 88.8705 515.57 88.6805 516.01 88.4905C521.98 85.9305 525.77 83.6705 528.06 81.5705C528.49 81.1805 528.86 80.8005 529.19 80.4205C529.64 79.8905 530 79.3805 530.28 78.8705C531.18 77.2505 531.26 75.7005 530.91 74.1305C530.75 73.4205 530.38 72.7805 529.86 72.2105V58.7605C534.98 60.5605 539.25 63.7905 541.71 68.9105C544.73 75.2005 543.93 80.0105 541.14 84.0105C540.73 84.6105 540.27 85.1905 539.76 85.7505C539.29 86.2905 538.79 86.8005 538.25 87.3105C534.5 90.8505 529.31 93.7705 524.47 96.7105C523.98 97.0105 523.49 97.3006 523.01 97.6006C522.52 97.9105 522.04 98.2107 521.56 98.5106C515.65 102.311 510.89 106.331 510.94 111.921C511.01 119.931 516.62 122.641 524.95 122.641C540.33 122.641 564.98 113.381 581.05 111.241C584.97 110.721 588.7 110.491 592.2 110.491Z" fill="#974DF7" />
                    <path id='path' d="M622 120.726C647.5 136.726 690.951 135.227 731.316 140.5C819.876 152.069 879.199 103.193 959.816 131C1092.38 176.726 1225.62 220.579 1241.92 353.17C1257.76 482.035 1113.73 572.824 1028.3 628.654C956.305 675.705 872.276 709.31 794.566 744.203C706.63 783.687 621.164 824.207 537.615 873.74C398.863 956 200.831 1062.87 171.815 1250.24C159.965 1326.75 184.66 1378.51 236.209 1430.86C307.395 1503.15 400.093 1558.69 490.143 1599.5C590.627 1645.04 685.293 1697.49 791.639 1726.15C883.555 1750.92 976.033 1765.12 1062.98 1806.97C1159.15 1853.26 1312.09 1968.2 1283.26 2104.64C1269.08 2171.76 1226.76 2216.7 1168.24 2243.55C1090.71 2279.11 1013.92 2312.29 933.064 2338.66C812.248 2378.07 688.007 2398.95 564.427 2425.18C446.571 2450.18 331.048 2481.65 216.848 2521.61C151.897 2544.34 60.4661 2565.46 17.19 2628.48C-7.78824 2664.86 6.55311 2714.96 28.4058 2762.87C56.5893 2824.67 162.312 2873.86 162.312 2873.86C162.312 2873.86 266.967 2938.78 327.85 2950.99C516.973 2988.92 711.415 2984.82 899.714 3029.06C954.959 3042.04 1228.78 3079.36 1175.32 3192.5C1137.7 3272.09 1048.22 3245.49 963.816 3270.5C909.191 3286.68 872.796 3279.59 822.316 3306C792.308 3321.7 751.816 3356.5 751.816 3356.5" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="tail"
                        d="M21.2404 2.99008C21.8797 3.5785 22.3112 3.99559 22.4342 4.11675C22.468 4.14182 22.4853 4.15407 22.4853 4.15407C21.9126 4.48763 21.2282 4.88839 20.4647 5.33314C14.4665 8.74848 3.58265 15.0474 -2.18986 18.3882L-2.85205 18.7715C-4.84004 19.9274 -6.07028 20.6304 -6.07028 20.6304C-4.68441 18.3688 -3.61493 16.1973 -2.77002 14.1241C-2.63328 13.7814 -2.52333 13.4701 -2.41448 13.1228C-1.47013 10.758 -0.908466 8.49351 -0.55633 6.36576C-0.5009 5.99505 -0.467566 5.62777 -0.426081 5.25471L-0.355404 -1.15157C-0.371335 -1.31203 -0.379114 -1.47829 -0.3974 -1.6248C-0.677117 -4.00267 -1.17252 -6.07991 -1.86734 -7.86813C-1.90192 -8.00305 -1.9539 -8.16242 -2.01638 -8.30205C-2.28221 -9.02103 -2.58064 -9.71684 -2.89664 -10.3511C-4.46105 -13.7419 -6.19267 -15.5904 -6.19267 -15.5904C-4.84167 -15.14 -3.45374 -14.5686 -2.02886 -13.8762C2.67209 -11.6481 7.63776 -8.1849 11.8738 -4.90229C16.0332 -1.67565 19.4793 1.35884 21.2125 2.98537L21.2404 2.99008Z"
                        fill="#974DF7" />
                </svg>
            }
        </div>
    )
}

export default AnimatedLogo