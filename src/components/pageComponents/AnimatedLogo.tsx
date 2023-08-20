import $ from 'jquery';
import DevhacksLogo from './DevhacksLogo';
import { useEffect, useState } from 'react';

const AnimatedLogo = () => {
    const [isClient, setIsClient] = useState(false)

    if (typeof document !== 'undefined' && isClient) {
        $(function () {

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
                    var docHeight = $(document).height() || 0
                    var windowHeight = $(window).height() || 0
                    var windowScroll = $(window)?.scrollTop() || 0
                    var pathLength = line.getTotalLength(),
                        maxScrollTop = docHeight - windowHeight,
                        percentDone = windowScroll / maxScrollTop,
                        length = percentDone * pathLength;
                    line.style.strokeDasharray = [length, pathLength].join(' ');
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
                    var tail = document.getElementById("c");
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
        <div className='absolute -top-1 right-0 w-full h-auto' id="route">
            {
                isClient &&
                <svg viewBox="0 0 1635 3373" className='' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Logo">
                        <path d="M713.582 104.11C713.422 103.14 713.342 102.09 713.342 100.96V49.0996H699.602V102.06C699.602 105.57 700.172 108.79 701.252 111.63C708.782 108.4 712.142 105.94 713.582 104.11Z" fill="#974DF7" />
                        <path d="M729.302 112.649C725.672 117.209 720.012 120.629 714.512 123.929C716.412 124.459 718.472 124.739 720.652 124.739C730.352 124.739 734.722 120.479 736.462 116.779H738.422V123.859H762.522V112.219H751.942V81.1494H738.202V97.2594C738.202 105.339 735.022 110.729 729.402 112.519C729.372 112.559 729.332 112.609 729.302 112.649Z" fill="#974DF7" />
                        <path d="M630.203 74.5802V84.1802H615.812V75.0202C615.812 55.3902 628.023 44.4902 647.213 44.4902C666.403 44.4902 678.612 55.3902 678.612 75.0202V89.1653C683.231 86.5287 689.746 84.3259 696.603 83.3301V96.0601C687.533 98.2001 678.882 103.6 678.623 112.45L678.612 112.418V123.87H664.222V74.5802C664.222 64.1102 657.903 57.3502 647.213 57.3502C636.523 57.3502 630.203 64.1102 630.203 74.5802Z" fill="#974DF7" />
                        <path d="M766.91 49.0996H781.3V79.0596H809.65V49.0996H824.04V123.87H809.65V92.1396H781.3V123.87H766.91V49.0996Z" fill="white" />
                        <path d="M831.031 108.061C831.031 96.9405 839.751 91.1605 851.971 91.1605H866.801V88.1105C866.801 83.0905 863.751 79.3905 856.771 79.3905C849.791 79.3905 846.851 82.8805 845.871 87.7905L833.221 83.5405C835.841 75.3605 842.931 68.2705 856.991 68.2705C871.051 68.2705 880.111 75.5805 880.111 89.1005V109.271C880.111 111.451 881.201 112.54 883.161 112.54H887.521V123.881H878.361C873.021 123.881 869.091 121.05 869.091 116.68V116.571H867.021C866.041 119.301 862.661 125.401 851.321 125.401C839.981 125.401 831.041 119.191 831.041 108.061H831.031ZM866.791 102.501V101.41H852.941C847.821 101.41 844.761 103.7 844.761 107.62C844.761 111.54 847.811 114.271 853.701 114.271C861.331 114.271 866.781 109.691 866.781 102.491L866.791 102.501Z" fill="white" />
                        <path d="M889.48 97.5898V96.0598C889.48 78.3998 901.8 68.2598 917.5 68.2598C933.2 68.2598 942.03 77.1998 944.32 89.1998L931.02 92.0298C930.15 85.4898 926.11 80.4698 917.83 80.4698C909.55 80.4698 903.22 86.0298 903.22 96.2798V97.3698C903.22 107.62 909.54 113.18 917.83 113.18C926.12 113.18 930.15 108.49 931.35 101.51L944.65 104.67C941.82 116.34 932.98 125.39 917.5 125.39C902.02 125.39 889.48 115.25 889.48 97.5898Z" fill="white" />
                        <path d="M965.371 47.54V89.74H967.331L985.211 69.79H1003.09L978.121 95.96L1003.96 123.87H986.291L967.321 102.39H965.361V123.87H951.621V47.54H965.371Z" fill="white" />
                        <path d="M1004.19 107.73L1016.84 104.46C1018.26 112.09 1023.38 114.49 1029.71 114.49C1036.04 114.49 1039.09 111.98 1039.09 108.6C1039.09 105.22 1036.36 103.69 1029.93 102.49L1026.88 101.94C1015.54 99.87 1006.16 95.62 1006.16 84.93C1006.16 74.24 1014.67 68.25 1027.53 68.25C1039.63 68.25 1047.92 74.14 1050.43 82.86L1037.67 86.79C1036.47 81.23 1032.76 79.16 1027.53 79.16C1022.3 79.16 1019.46 81.12 1019.46 84.28C1019.46 87.77 1022.51 89.19 1027.53 90.06L1030.58 90.61C1042.79 92.79 1052.39 96.28 1052.39 107.62C1052.39 118.96 1043.45 125.39 1029.71 125.39C1015.97 125.39 1006.05 119.07 1004.19 107.73Z" fill="white" />
                        <path d="M631.892 51.43C630.212 50.73 628.922 49.61 627.712 48.25C626.282 46.97 624.532 44.96 623.202 41.8C621.532 37.82 619.622 31.26 622.332 23.04V23C622.332 23 622.342 23 622.332 23.02C622.262 23.11 622.002 23.45 621.572 24.1C620.442 25.77 617.822 29.82 616.462 34.51C613.102 46.09 615.742 53.51 622.262 61.13C622.962 61.95 623.772 62.75 624.742 63.54C624.762 63.52 624.762 63.51 624.782 63.49C624.792 63.54 624.782 63.6 624.782 63.6C625.942 63.96 627.102 63.35 628.282 62.34C628.952 61.76 629.642 61.25 630.492 60.39C630.492 60.37 630.512 60.36 630.512 60.36C630.872 59.95 631.242 59.49 631.582 59.05C632.382 58.01 633.042 57.03 633.532 56.22C635.582 52.86 634.702 52.43 634.532 52.19C633.562 51.98 632.662 51.76 631.882 51.43H631.892Z" fill="#974DF7" />
                        <path d="M661.731 51.43C663.411 50.73 664.701 49.61 665.911 48.25C667.341 46.97 669.091 44.96 670.421 41.8C672.091 37.82 674.001 31.25 671.291 23.04V23C671.291 23 671.271 23 671.291 23.02C671.361 23.11 671.621 23.45 672.051 24.1C673.181 25.77 675.801 29.82 677.161 34.51C680.521 46.09 677.881 53.51 671.361 61.13C670.661 61.95 669.851 62.75 668.881 63.54C668.861 63.52 668.861 63.51 668.841 63.49C668.831 63.54 668.841 63.6 668.841 63.6C667.681 63.96 666.521 63.35 665.341 62.34C664.671 61.76 663.981 61.25 663.131 60.39C663.131 60.37 663.111 60.36 663.111 60.36C662.751 59.95 662.381 59.49 662.041 59.05C661.241 58.01 660.581 57.03 660.091 56.22C658.041 52.86 658.921 52.43 659.091 52.19C660.061 51.98 660.961 51.76 661.741 51.43H661.731Z" fill="#974DF7" />
                        <path d="M780.2 133.24C796.42 133.24 807.96 138.08 811.78 140.85L808.01 146.03C803.83 143.82 795.25 140.19 784.01 140.19C782.69 140.19 781.34 140.24 779.96 140.35C746.19 142.96 737.92 156.05 714.54 156.05C691.16 156.05 686.48 140.8 686 135.86C685.2 127.62 689.1 117.69 701.25 112.4C701.5 112.29 701.75 112.19 702.01 112.08L702.67 111.81C703.13 111.62 703.57 111.43 704.01 111.24C709.98 108.68 713.77 106.42 716.06 104.32C716.49 103.93 716.86 103.55 717.19 103.17C717.64 102.64 718 102.13 718.28 101.62C719.18 99.9995 719.26 98.4495 718.91 96.8795C718.75 96.1695 718.38 95.5295 717.86 94.9595V81.5095C722.98 83.3095 727.25 86.5395 729.71 91.6595C732.73 97.9495 731.93 102.76 729.14 106.76C728.73 107.36 728.27 107.94 727.76 108.5C727.29 109.04 726.79 109.55 726.25 110.06C722.5 113.6 717.31 116.52 712.47 119.46C711.98 119.76 711.49 120.05 711.01 120.35C710.52 120.66 710.04 120.96 709.56 121.26C703.65 125.06 698.89 129.08 698.94 134.67C699.01 142.68 704.62 145.39 712.95 145.39C728.33 145.39 752.98 136.13 769.05 133.99C772.97 133.47 776.7 133.24 780.2 133.24Z" fill="#974DF7" />
                    </g>
                    <path id="path"
                        d="M809.204 143C809.204 143 974.349 203.935 1085 209.5C1184.76 214.517 1245.13 145.364 1339 179.5C1474.59 228.808 1531.66 357.119 1521 501C1502.53 750.339 1143.52 629.26 893.502 628C641.889 626.732 482.544 369.183 263.501 493C129.994 568.467 78.8403 662.965 29.0008 808C-105.343 1198.95 509.731 1051.07 822.001 1198C1065.53 1312.59 1265.12 1286.94 1449.5 1483C1817.19 1873.97 306.734 1058.19 76.5001 1543C-181.098 2085.43 1704.57 1407.65 1548.5 1987.5C1412.76 2491.84 444.286 1837.11 254 2323.5C160.314 2562.97 148.965 2759.37 278.5 2981.5C515.948 3388.69 1806.78 2636.59 1485.5 2981.5C1331.82 3146.48 1123.89 3084.58 919.5 3246"
                        stroke="#974DF7" strokeWidth="6.5" />
                    <path id="c"
                        d="M21.2404 2.99008C21.8797 3.5785 22.3112 3.99559 22.4342 4.11675C22.468 4.14182 22.4853 4.15407 22.4853 4.15407C21.9126 4.48763 21.2282 4.88839 20.4647 5.33314C14.4665 8.74848 3.58265 15.0474 -2.18986 18.3882L-2.85205 18.7715C-4.84004 19.9274 -6.07028 20.6304 -6.07028 20.6304C-4.68441 18.3688 -3.61493 16.1973 -2.77002 14.1241C-2.63328 13.7814 -2.52333 13.4701 -2.41448 13.1228C-1.47013 10.758 -0.908466 8.49351 -0.55633 6.36576C-0.5009 5.99505 -0.467566 5.62777 -0.426081 5.25471L-0.355404 -1.15157C-0.371335 -1.31203 -0.379114 -1.47829 -0.3974 -1.6248C-0.677117 -4.00267 -1.17252 -6.07991 -1.86734 -7.86813C-1.90192 -8.00305 -1.9539 -8.16242 -2.01638 -8.30205C-2.28221 -9.02103 -2.58064 -9.71684 -2.89664 -10.3511C-4.46105 -13.7419 -6.19267 -15.5904 -6.19267 -15.5904C-4.84167 -15.14 -3.45374 -14.5686 -2.02886 -13.8762C2.67209 -11.6481 7.63776 -8.1849 11.8738 -4.90229C16.0332 -1.67565 19.4793 1.35884 21.2125 2.98537L21.2404 2.99008Z"
                        fill="#974DF7" />
                </svg>
            }

        </div>
    )
}

export default AnimatedLogo