<?php

namespace App\Http\Controllers;

use App\Models\CropChachoengsao;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class CropChacoengsaoController extends Controller
{
    public function index()
    {
        $results = CropChachoengsao::all();
        return view('maps2.index', compact('results'));
    }

    public function pointCropJson()
    {
        $result = CropChachoengsao::all();
        return json_encode($result);
    }

    public function dataEarth()
    {
        $jsonData = '{
            "data": [
                {
                    "DOY": 1,
                    "Day": 1,
                    "Month": 1,
                    "TCI": 37.5498471859,
                    "Timestamp": 1577836800000,
                    "VCI": 47.2626816771,
                    "VHI": 42.4890148753,
                    "Year": 2020
                },
                {
                    "DOY": 17,
                    "Day": 17,
                    "Month": 1,
                    "TCI": 44.0725011141,
                    "Timestamp": 1579219200000,
                    "VCI": 56.727981755,
                    "VHI": 50.4002414346,
                    "Year": 2020
                },
                {
                    "DOY": 33,
                    "Day": 2,
                    "Month": 2,
                    "TCI": 36.6771800769,
                    "Timestamp": 1580601600000,
                    "VCI": 59.4766846501,
                    "VHI": 48.2016975541,
                    "Year": 2020
                },
                {
                    "DOY": 49,
                    "Day": 18,
                    "Month": 2,
                    "TCI": 39.2636690923,
                    "Timestamp": 1581984000000,
                    "VCI": 56.3810514967,
                    "VHI": 47.8223602945,
                    "Year": 2020
                },
                {
                    "DOY": 65,
                    "Day": 5,
                    "Month": 3,
                    "TCI": 27.0161089827,
                    "Timestamp": 1583366400000,
                    "VCI": 58.6358757474,
                    "VHI": 42.871304105,
                    "Year": 2020
                },
                {
                    "DOY": 81,
                    "Day": 21,
                    "Month": 3,
                    "TCI": 26.4160435204,
                    "Timestamp": 1584748800000,
                    "VCI": 63.1389717076,
                    "VHI": 44.7793676253,
                    "Year": 2020
                },
                {
                    "DOY": 97,
                    "Day": 6,
                    "Month": 4,
                    "TCI": 23.7703206317,
                    "Timestamp": 1586131200000,
                    "VCI": 63.8802117124,
                    "VHI": 43.825266172,
                    "Year": 2020
                },
                {
                    "DOY": 113,
                    "Day": 22,
                    "Month": 4,
                    "TCI": 28.1741848987,
                    "Timestamp": 1587513600000,
                    "VCI": 78.1549281852,
                    "VHI": 53.2473247083,
                    "Year": 2020
                },
                {
                    "DOY": 129,
                    "Day": 8,
                    "Month": 5,
                    "TCI": 44.2903905984,
                    "Timestamp": 1588896000000,
                    "VCI": 68.0687410621,
                    "VHI": 56.5085393484,
                    "Year": 2020
                },
                {
                    "DOY": 145,
                    "Day": 24,
                    "Month": 5,
                    "TCI": 28.7876307511,
                    "Timestamp": 1590278400000,
                    "VCI": 66.6233513861,
                    "VHI": 49.3273589626,
                    "Year": 2020
                },
                {
                    "DOY": 161,
                    "Day": 9,
                    "Month": 6,
                    "TCI": 34.2404122341,
                    "Timestamp": 1591660800000,
                    "VCI": 77.4194103423,
                    "VHI": 55.9504178553,
                    "Year": 2020
                },
                {
                    "DOY": 177,
                    "Day": 25,
                    "Month": 6,
                    "TCI": 36.2910507165,
                    "Timestamp": 1593043200000,
                    "VCI": 81.3047536773,
                    "VHI": 59.2602984438,
                    "Year": 2020
                },
                {
                    "DOY": 193,
                    "Day": 11,
                    "Month": 7,
                    "TCI": 51.716555338,
                    "Timestamp": 1594425600000,
                    "VCI": 83.893569693,
                    "VHI": 68.2563459796,
                    "Year": 2020
                },
                {
                    "DOY": 209,
                    "Day": 27,
                    "Month": 7,
                    "TCI": 49.3262516093,
                    "Timestamp": 1595808000000,
                    "VCI": 63.1218393926,
                    "VHI": 58.1794444822,
                    "Year": 2020
                },
                {
                    "DOY": 225,
                    "Day": 12,
                    "Month": 8,
                    "TCI": 47.1356728297,
                    "Timestamp": 1597190400000,
                    "VCI": 90.3137491949,
                    "VHI": 69.0270915643,
                    "Year": 2020
                },
                {
                    "DOY": 241,
                    "Day": 28,
                    "Month": 8,
                    "TCI": 45.9826794883,
                    "Timestamp": 1598572800000,
                    "VCI": 72.720608442,
                    "VHI": 60.8554659295,
                    "Year": 2020
                },
                {
                    "DOY": 257,
                    "Day": 13,
                    "Month": 9,
                    "TCI": 44.5559091178,
                    "Timestamp": 1599955200000,
                    "VCI": 89.0561487784,
                    "VHI": 66.8060289481,
                    "Year": 2020
                },
                {
                    "DOY": 273,
                    "Day": 29,
                    "Month": 9,
                    "TCI": 67.7773666479,
                    "Timestamp": 1601337600000,
                    "VCI": 58.0557376877,
                    "VHI": 61.7962977471,
                    "Year": 2020
                },
                {
                    "DOY": 289,
                    "Day": 15,
                    "Month": 10,
                    "TCI": 58.2853082614,
                    "Timestamp": 1602720000000,
                    "VCI": 84.6957804091,
                    "VHI": 71.627625324,
                    "Year": 2020
                },
                {
                    "DOY": 305,
                    "Day": 31,
                    "Month": 10,
                    "TCI": 59.6768102424,
                    "Timestamp": 1604102400000,
                    "VCI": 79.9551794249,
                    "VHI": 69.8159948337,
                    "Year": 2020
                },
                {
                    "DOY": 321,
                    "Day": 16,
                    "Month": 11,
                    "TCI": 56.6111799655,
                    "Timestamp": 1605484800000,
                    "VCI": 77.7655550662,
                    "VHI": 67.1883675159,
                    "Year": 2020
                },
                {
                    "DOY": 337,
                    "Day": 2,
                    "Month": 12,
                    "TCI": 56.6197256495,
                    "Timestamp": 1606867200000,
                    "VCI": 72.7870361438,
                    "VHI": 64.7767003359,
                    "Year": 2020
                },
                {
                    "DOY": 353,
                    "Day": 18,
                    "Month": 12,
                    "TCI": 57.9536495991,
                    "Timestamp": 1608249600000,
                    "VCI": 67.2585102813,
                    "VHI": 62.6095750549,
                    "Year": 2020
                },
                {
                    "DOY": 1,
                    "Day": 1,
                    "Month": 1,
                    "TCI": 58.2510010646,
                    "Timestamp": 1609459200000,
                    "VCI": 61.7552158335,
                    "VHI": 60.0655673889,
                    "Year": 2021
                },
                {
                    "DOY": 17,
                    "Day": 17,
                    "Month": 1,
                    "TCI": 49.6787854469,
                    "Timestamp": 1610841600000,
                    "VCI": 48.940738752,
                    "VHI": 49.3097620995,
                    "Year": 2021
                },
                {
                    "DOY": 33,
                    "Day": 2,
                    "Month": 2,
                    "TCI": 38.7031062947,
                    "Timestamp": 1612224000000,
                    "VCI": 50.2471089962,
                    "VHI": 44.5036051948,
                    "Year": 2021
                },
                {
                    "DOY": 49,
                    "Day": 18,
                    "Month": 2,
                    "TCI": 37.1618273568,
                    "Timestamp": 1613606400000,
                    "VCI": 61.5022758827,
                    "VHI": 49.3484025465,
                    "Year": 2021
                },
                {
                    "DOY": 65,
                    "Day": 6,
                    "Month": 3,
                    "TCI": 45.8974933115,
                    "Timestamp": 1614988800000,
                    "VCI": 69.882654734,
                    "VHI": 57.8900740228,
                    "Year": 2021
                },
                {
                    "DOY": 81,
                    "Day": 22,
                    "Month": 3,
                    "TCI": 32.8690884708,
                    "Timestamp": 1616371200000,
                    "VCI": 73.0182558389,
                    "VHI": 52.9436721549,
                    "Year": 2021
                },
                {
                    "DOY": 97,
                    "Day": 7,
                    "Month": 4,
                    "TCI": 42.2509251495,
                    "Timestamp": 1617753600000,
                    "VCI": 77.6369433528,
                    "VHI": 59.9439342512,
                    "Year": 2021
                },
                {
                    "DOY": 113,
                    "Day": 23,
                    "Month": 4,
                    "TCI": 41.0951535673,
                    "Timestamp": 1619136000000,
                    "VCI": 73.9316474193,
                    "VHI": 57.7422720475,
                    "Year": 2021
                },
                {
                    "DOY": 129,
                    "Day": 9,
                    "Month": 5,
                    "TCI": 42.7396272207,
                    "Timestamp": 1620518400000,
                    "VCI": 80.3133675341,
                    "VHI": 61.5568167906,
                    "Year": 2021
                },
                {
                    "DOY": 145,
                    "Day": 25,
                    "Month": 5,
                    "TCI": 46.5332639515,
                    "Timestamp": 1621900800000,
                    "VCI": 81.4729982583,
                    "VHI": 64.3302267567,
                    "Year": 2021
                },
                {
                    "DOY": 161,
                    "Day": 10,
                    "Month": 6,
                    "TCI": 48.7003700146,
                    "Timestamp": 1623283200000,
                    "VCI": 66.4747667066,
                    "VHI": 58.0815557274,
                    "Year": 2021
                },
                {
                    "DOY": 177,
                    "Day": 26,
                    "Month": 6,
                    "TCI": 37.9588631585,
                    "Timestamp": 1624665600000,
                    "VCI": 81.7345216206,
                    "VHI": 59.8511361135,
                    "Year": 2021
                },
                {
                    "DOY": 193,
                    "Day": 12,
                    "Month": 7,
                    "TCI": 57.6575856557,
                    "Timestamp": 1626048000000,
                    "VCI": 81.1234884305,
                    "VHI": 69.92652914,
                    "Year": 2021
                },
                {
                    "DOY": 209,
                    "Day": 28,
                    "Month": 7,
                    "TCI": 57.1751307401,
                    "Timestamp": 1627430400000,
                    "VCI": 55.1278945171,
                    "VHI": 69.6021972873,
                    "Year": 2021
                },
                {
                    "DOY": 225,
                    "Day": 13,
                    "Month": 8,
                    "TCI": 42.0186971203,
                    "Timestamp": 1628812800000,
                    "VCI": 80.8305976367,
                    "VHI": 61.6572948281,
                    "Year": 2021
                },
                {
                    "DOY": 241,
                    "Day": 29,
                    "Month": 8,
                    "TCI": 41.9619235446,
                    "Timestamp": 1630195200000,
                    "VCI": 50.8336877006,
                    "VHI": 50.2734201579,
                    "Year": 2021
                },
                {
                    "DOY": 257,
                    "Day": 14,
                    "Month": 9,
                    "TCI": 47.7326658428,
                    "Timestamp": 1631577600000,
                    "VCI": 87.1910264664,
                    "VHI": 68.0060514893,
                    "Year": 2021
                },
                {
                    "DOY": 273,
                    "Day": 30,
                    "Month": 9,
                    "TCI": 44.1879070971,
                    "Timestamp": 1632960000000,
                    "VCI": 72.3110937343,
                    "VHI": 53.2009059475,
                    "Year": 2021
                },
                {
                    "DOY": 289,
                    "Day": 16,
                    "Month": 10,
                    "TCI": 58.3091722061,
                    "Timestamp": 1634342400000,
                    "VCI": 80.1773710748,
                    "VHI": 69.2432716404,
                    "Year": 2021
                },
                {
                    "DOY": 305,
                    "Day": 1,
                    "Month": 11,
                    "TCI": 52.2574722144,
                    "Timestamp": 1635724800000,
                    "VCI": 72.7354743402,
                    "VHI": 62.5128739556,
                    "Year": 2021
                },
                {
                    "DOY": 321,
                    "Day": 17,
                    "Month": 11,
                    "TCI": 58.1270441106,
                    "Timestamp": 1637107200000,
                    "VCI": 76.2780355202,
                    "VHI": 67.2172820052,
                    "Year": 2021
                },
                {
                    "DOY": 337,
                    "Day": 3,
                    "Month": 12,
                    "TCI": 63.1434962432,
                    "Timestamp": 1638489600000,
                    "VCI": 73.3627043426,
                    "VHI": 68.7332500148,
                    "Year": 2021
                },
                {
                    "DOY": 353,
                    "Day": 19,
                    "Month": 12,
                    "TCI": 53.0434282034,
                    "Timestamp": 1639872000000,
                    "VCI": 68.0563278978,
                    "VHI": 60.6793638327,
                    "Year": 2021
                },
                {
                    "DOY": 1,
                    "Day": 1,
                    "Month": 1,
                    "TCI": 43.7934003825,
                    "Timestamp": 1640995200000,
                    "VCI": 54.8986837667,
                    "VHI": 49.3851229002,
                    "Year": 2022
                },
                {
                    "DOY": 17,
                    "Day": 17,
                    "Month": 1,
                    "TCI": 45.7672563918,
                    "Timestamp": 1642377600000,
                    "VCI": 47.7670376994,
                    "VHI": 46.9505953381,
                    "Year": 2022
                },
                {
                    "DOY": 33,
                    "Day": 2,
                    "Month": 2,
                    "TCI": 42.9373020006,
                    "Timestamp": 1643760000000,
                    "VCI": 62.439105387,
                    "VHI": 52.8154531806,
                    "Year": 2022
                },
                {
                    "DOY": 49,
                    "Day": 18,
                    "Month": 2,
                    "TCI": 46.9525123937,
                    "Timestamp": 1645142400000,
                    "VCI": 66.7130832102,
                    "VHI": 56.832797802,
                    "Year": 2022
                },
                {
                    "DOY": 65,
                    "Day": 6,
                    "Month": 3,
                    "TCI": 47.9478743303,
                    "Timestamp": 1646524800000,
                    "VCI": 68.673864611,
                    "VHI": 58.3108694707,
                    "Year": 2022
                },
                {
                    "DOY": 81,
                    "Day": 22,
                    "Month": 3,
                    "TCI": 44.6137113047,
                    "Timestamp": 1647907200000,
                    "VCI": 73.2678087317,
                    "VHI": 59.0083439017,
                    "Year": 2022
                },
                {
                    "DOY": 97,
                    "Day": 7,
                    "Month": 4,
                    "TCI": 43.0890307109,
                    "Timestamp": 1649289600000,
                    "VCI": 73.5705674729,
                    "VHI": 58.3297990919,
                    "Year": 2022
                },
                {
                    "DOY": 113,
                    "Day": 23,
                    "Month": 4,
                    "TCI": 35.5478695827,
                    "Timestamp": 1650672000000,
                    "VCI": 68.7901032294,
                    "VHI": 52.6666074555,
                    "Year": 2022
                },
                {
                    "DOY": 129,
                    "Day": 9,
                    "Month": 5,
                    "TCI": 46.5804641747,
                    "Timestamp": 1652054400000,
                    "VCI": 71.4411384491,
                    "VHI": 60.1645699763,
                    "Year": 2022
                },
                {
                    "DOY": 145,
                    "Day": 25,
                    "Month": 5,
                    "TCI": 46.6064448017,
                    "Timestamp": 1653436800000,
                    "VCI": 70.2563471004,
                    "VHI": 58.7123501968,
                    "Year": 2022
                },
                {
                    "DOY": 161,
                    "Day": 10,
                    "Month": 6,
                    "TCI": 44.0375030655,
                    "Timestamp": 1654819200000,
                    "VCI": 82.0119278992,
                    "VHI": 63.0247154823,
                    "Year": 2022
                },
                {
                    "DOY": 177,
                    "Day": 26,
                    "Month": 6,
                    "TCI": 50.0744387094,
                    "Timestamp": 1656201600000,
                    "VCI": 62.059724392,
                    "VHI": 59.8231393473,
                    "Year": 2022
                },
                {
                    "DOY": 193,
                    "Day": 12,
                    "Month": 7,
                    "TCI": 53.9548613279,
                    "Timestamp": 1657584000000,
                    "VCI": 78.206298793,
                    "VHI": 65.9823791785,
                    "Year": 2022
                },
                {
                    "DOY": 209,
                    "Day": 28,
                    "Month": 7,
                    "TCI": 79.746835443,
                    "Timestamp": 1658966400000,
                    "VCI": 39.3082243959,
                    "VHI": 87.1845100982,
                    "Year": 2022
                },
                {
                    "DOY": 225,
                    "Day": 13,
                    "Month": 8,
                    "TCI": 49.6817004337,
                    "Timestamp": 1660348800000,
                    "VCI": 78.0025300415,
                    "VHI": 64.3049020056,
                    "Year": 2022
                },
                {
                    "DOY": 241,
                    "Day": 29,
                    "Month": 8,
                    "TCI": 48.0857638215,
                    "Timestamp": 1661731200000,
                    "VCI": 83.6017062469,
                    "VHI": 65.9604681536,
                    "Year": 2022
                },
                {
                    "DOY": 257,
                    "Day": 14,
                    "Month": 9,
                    "TCI": 43.8558357847,
                    "Timestamp": 1663113600000,
                    "VCI": 48.3495938628,
                    "VHI": 54.0860782118,
                    "Year": 2022
                },
                {
                    "DOY": 273,
                    "Day": 30,
                    "Month": 9,
                    "TCI": 59.0356966069,
                    "Timestamp": 1664496000000,
                    "VCI": 63.5621563727,
                    "VHI": 62.4548257872,
                    "Year": 2022
                },
                {
                    "DOY": 289,
                    "Day": 16,
                    "Month": 10,
                    "TCI": 60.7723534878,
                    "Timestamp": 1665878400000,
                    "VCI": 72.8492653827,
                    "VHI": 66.8108094352,
                    "Year": 2022
                },
                {
                    "DOY": 305,
                    "Day": 1,
                    "Month": 11,
                    "TCI": 55.4559193428,
                    "Timestamp": 1667260800000,
                    "VCI": 69.2976418983,
                    "VHI": 62.3767806206,
                    "Year": 2022
                },
                {
                    "DOY": 321,
                    "Day": 17,
                    "Month": 11,
                    "TCI": 57.0371000561,
                    "Timestamp": 1668643200000,
                    "VCI": 62.918785594,
                    "VHI": 60.1292817922,
                    "Year": 2022
                },
                {
                    "DOY": 337,
                    "Day": 3,
                    "Month": 12,
                    "TCI": 66.2605538303,
                    "Timestamp": 1670025600000,
                    "VCI": 68.4994465992,
                    "VHI": 67.3800002147,
                    "Year": 2022
                },
                {
                    "DOY": 353,
                    "Day": 19,
                    "Month": 12,
                    "TCI": 70.5698443822,
                    "Timestamp": 1671408000000,
                    "VCI": 62.1994616984,
                    "VHI": 66.3814759945,
                    "Year": 2022
                },
                {
                    "DOY": 1,
                    "Day": 1,
                    "Month": 1,
                    "TCI": 61.3055816818,
                    "Timestamp": 1672531200000,
                    "VCI": 63.2759317605,
                    "VHI": 62.7884655287,
                    "Year": 2023
                },
                {
                    "DOY": 17,
                    "Day": 17,
                    "Month": 1,
                    "TCI": 59.3206285932,
                    "Timestamp": 1673913600000,
                    "VCI": 50.0118809271,
                    "VHI": 54.7171837435,
                    "Year": 2023
                },
                {
                    "DOY": 33,
                    "Day": 2,
                    "Month": 2,
                    "TCI": 49.8235499307,
                    "Timestamp": 1675296000000,
                    "VCI": 58.7020040034,
                    "VHI": 54.5952442474,
                    "Year": 2023
                },
                {
                    "DOY": 49,
                    "Day": 18,
                    "Month": 2,
                    "TCI": 52.1602715872,
                    "Timestamp": 1676678400000,
                    "VCI": 57.9768833731,
                    "VHI": 55.0685774802,
                    "Year": 2023
                },
                {
                    "DOY": 65,
                    "Day": 6,
                    "Month": 3,
                    "TCI": 41.1350091406,
                    "Timestamp": 1678060800000,
                    "VCI": 58.2899439464,
                    "VHI": 49.7124765435,
                    "Year": 2023
                },
                {
                    "DOY": 81,
                    "Day": 22,
                    "Month": 3,
                    "TCI": 33.6067347776,
                    "Timestamp": 1679443200000,
                    "VCI": 57.9322284908,
                    "VHI": 45.7694816342,
                    "Year": 2023
                },
                {
                    "DOY": 97,
                    "Day": 7,
                    "Month": 4,
                    "TCI": 39.3638320296,
                    "Timestamp": 1680825600000,
                    "VCI": 70.1752323041,
                    "VHI": 54.7695321668,
                    "Year": 2023
                },
                {
                    "DOY": 113,
                    "Day": 23,
                    "Month": 4,
                    "TCI": 32.4981661035,
                    "Timestamp": 1682208000000,
                    "VCI": 66.5635635897,
                    "VHI": 49.5308648466,
                    "Year": 2023
                },
                {
                    "DOY": 129,
                    "Day": 9,
                    "Month": 5,
                    "TCI": 30.4498175732,
                    "Timestamp": 1683590400000,
                    "VCI": 70.0249073093,
                    "VHI": 50.2373624413,
                    "Year": 2023
                },
                {
                    "DOY": 145,
                    "Day": 25,
                    "Month": 5,
                    "TCI": 38.65418088,
                    "Timestamp": 1684972800000,
                    "VCI": 72.6728569636,
                    "VHI": 55.6635189218,
                    "Year": 2023
                },
                {
                    "DOY": 161,
                    "Day": 10,
                    "Month": 6,
                    "TCI": 54.6289285478,
                    "Timestamp": 1686355200000,
                    "VCI": 74.1702448218,
                    "VHI": 65.3350321439,
                    "Year": 2023
                },
                {
                    "DOY": 177,
                    "Day": 26,
                    "Month": 6,
                    "TCI": 41.6561613198,
                    "Timestamp": 1687737600000,
                    "VCI": 91.2943085012,
                    "VHI": 66.787829991,
                    "Year": 2023
                }
            ],
            "map": {
                "tci": "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/cfbd4c15fc8a5ec7c6d80c9ed751140b-9c3592c478fcd2c9a469ab5d8885cbb3/tiles/{z}/{x}/{y}",
                "vci": "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/3595d6ee1fcdafd093390ea319a1cddc-582cb35ef9a7ed9230bb579aaea9ed28/tiles/{z}/{x}/{y}",
                "vhi": "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/7f56c60d969499258a374d9df244bf58-3e9357708b186ea3d03ca4b3b4e2a592/tiles/{z}/{x}/{y}"
            }
        }';
        

        $data = json_decode($jsonData, true);

        return response()->json($data);
    }
    public function getWaterOccurrences()
    {
        try {
            $response = Http::get('http://192.168.102.89:5000/wateroccurence');
            $data = $response->json();
            return response()->json($data);
        } catch (\Exception $e) {
            return response()->json(['error' => 'API request failed'], 500);
        }
    }

    public function getVhiData(Request $request)
    {
        $geometry = [
            [[101.26763091246642, 13.566337781806908], [101.35277495543517, 13.472871196094255], /* ... */]
        ];
        $type = 'polygon';

        $data = [
            'geometry' => $geometry,
            'type' => $type,
        ];

        try {
            $response = Http::post('http://192.168.102.89:5000/vhi', $data);
            $responseData = $response->json();
            return response()->json($responseData, $response->status());
        } catch (\Exception $e) {
            return response()->json(['error' => 'API request failed'], 500);
        }
    }

    // public function preception(Request $request){
    //     $geometry = $request->input('geometry');
    //     $type = $request->input('type');
    //     $startYear = $request->input('startYear');
    //     $endYear = $request->input('endYear');
    
    //     $response = Http::withHeaders([
    //         'Accept: application/json',
    //         'Content-Type: application/json',
    //     ])->post('http://192.168.100.171:5000/precipitation', [
    //         'geometry' => [101.585603,13.682281],
    //         'type' => 'point',
    //         'startYear' => 2022,
    //         'endYear' => 2022
    //     ]);
    
    //     return response()->json($response->json());
    // }

    // public function preception(Request $request) {
    //     $geometry = $request->input('geometry');
    //     $type = $request->input('type');
    //     $startYear = $request->input('startYear');
    //     $endYear = $request->input('endYear');
    
    //     $client = new Client([
    //         'base_uri' => 'http://192.168.100.171:5000/',
    //         'headers' => [
    //             'Accept' => 'application/json',
    //             'Content-Type' => 'application/json',
    //         ],
    //     ]);
    
    //     $response = $client->post('precipitation', [
    //         'json' => [
    //             'geometry' => $geometry,
    //             'type' => $type,
    //             'startYear' => $startYear,
    //             'endYear' => $endYear,
    //         ],
    //     ]);
    
    //     $responseData = json_decode($response->getBody(), true);
    
    //     return response()->json($responseData);
    // }

    public function preception(Request $request){
        $geometry = $request->input('geometry');
        $type = $request->input('type');
        $startYear = $request->input('startYear');
        $endYear = $request->input('endYear');

        $client = new Client;
        $url = "http://192.168.102.89:5000/precipitation/";
        $response = $client->post($url, [
            'form_params' => [
                'geometry' => $geometry,
                'type' => $type,
                'startYear' => $startYear,
                'endYear' => $endYear,
            ]
        ]);
        $responseData = json_decode($response->getBody(), true);
    
        return response()->json($responseData);
    }
    public function vci(Request $request){
        $geometry = $request->input('geometry');
        $type = $request->input('type');
        $startYear = $request->input('startYear');
        $endYear = $request->input('endYear');

        $client = new Client;
        $url = "http://192.168.102.89:5000/vci";
        $response = $client->post($url, [
            'form_params' => [
                'geometry' => $geometry,
                'type' => $type,
                'startYear' => $startYear,
                'endYear' => $endYear,
            ]
        ]);
        $responseData = json_decode($response->getBody(), true);
    
        return response()->json($responseData);
    }
}
