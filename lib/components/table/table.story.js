"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _table = _interopRequireDefault(require("react-bulma-components/lib/components/table"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)('Table', module).add('Default', function () {
  return _react.default.createElement(_table.default, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Position"
  }, "Pos")), _react.default.createElement("th", null, "Team"), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Played"
  }, "Pld")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Won"
  }, "W")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Drawn"
  }, "D")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Lost"
  }, "L")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Goals for"
  }, "GF")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Goals against"
  }, "GA")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Goal difference"
  }, "GD")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Points"
  }, "Pts")), _react.default.createElement("th", null, "Qualification or relegation"))), _react.default.createElement("tfoot", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Position"
  }, "Pos")), _react.default.createElement("th", null, "Team"), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Played"
  }, "Pld")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Won"
  }, "W")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Drawn"
  }, "D")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Lost"
  }, "L")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Goals for"
  }, "GF")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Goals against"
  }, "GA")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Goal difference"
  }, "GD")), _react.default.createElement("th", null, _react.default.createElement("abbr", {
    title: "Points"
  }, "Pts")), _react.default.createElement("th", null, "Qualification or relegation"))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "1"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Leicester_City_F.C.",
    title: "Leicester City F.C."
  }, "Leicester City"), " ", _react.default.createElement("strong", null, "(C)")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "23"), _react.default.createElement("td", null, "12"), _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "68"), _react.default.createElement("td", null, "36"), _react.default.createElement("td", null, "+32"), _react.default.createElement("td", null, "81"), _react.default.createElement("td", null, "Qualification for the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage",
    title: "2016\u201317 UEFA Champions League"
  }, "Champions League group stage"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "2"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Arsenal_F.C.",
    title: "Arsenal F.C."
  }, "Arsenal")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "20"), _react.default.createElement("td", null, "11"), _react.default.createElement("td", null, "7"), _react.default.createElement("td", null, "65"), _react.default.createElement("td", null, "36"), _react.default.createElement("td", null, "+29"), _react.default.createElement("td", null, "71"), _react.default.createElement("td", null, "Qualification for the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage",
    title: "2016\u201317 UEFA Champions League"
  }, "Champions League group stage"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "3"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.",
    title: "Tottenham Hotspur F.C."
  }, "Tottenham Hotspur")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "19"), _react.default.createElement("td", null, "13"), _react.default.createElement("td", null, "6"), _react.default.createElement("td", null, "69"), _react.default.createElement("td", null, "35"), _react.default.createElement("td", null, "+34"), _react.default.createElement("td", null, "70"), _react.default.createElement("td", null, "Qualification for the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage",
    title: "2016\u201317 UEFA Champions League"
  }, "Champions League group stage"))), _react.default.createElement("tr", {
    className: "is-selected"
  }, _react.default.createElement("th", null, "4"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Manchester_City_F.C.",
    title: "Manchester City F.C."
  }, "Manchester City")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "19"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "10"), _react.default.createElement("td", null, "71"), _react.default.createElement("td", null, "41"), _react.default.createElement("td", null, "+30"), _react.default.createElement("td", null, "66"), _react.default.createElement("td", null, "Qualification for the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round",
    title: "2016\u201317 UEFA Champions League"
  }, "Champions League play-off round"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "5"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Manchester_United_F.C.",
    title: "Manchester United F.C."
  }, "Manchester United")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "19"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "10"), _react.default.createElement("td", null, "49"), _react.default.createElement("td", null, "35"), _react.default.createElement("td", null, "+14"), _react.default.createElement("td", null, "66"), _react.default.createElement("td", null, "Qualification for the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage",
    title: "2016\u201317 UEFA Europa League"
  }, "Europa League group stage"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "6"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Southampton_F.C.",
    title: "Southampton F.C."
  }, "Southampton")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "18"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "11"), _react.default.createElement("td", null, "59"), _react.default.createElement("td", null, "41"), _react.default.createElement("td", null, "+18"), _react.default.createElement("td", null, "63"), _react.default.createElement("td", null, "Qualification for the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage",
    title: "2016\u201317 UEFA Europa League"
  }, "Europa League group stage"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "7"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/West_Ham_United_F.C.",
    title: "West Ham United F.C."
  }, "West Ham United")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "16"), _react.default.createElement("td", null, "14"), _react.default.createElement("td", null, "8"), _react.default.createElement("td", null, "65"), _react.default.createElement("td", null, "51"), _react.default.createElement("td", null, "+14"), _react.default.createElement("td", null, "62"), _react.default.createElement("td", null, "Qualification for the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round",
    title: "2016\u201317 UEFA Europa League"
  }, "Europa League third qualifying round"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "8"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Liverpool_F.C.",
    title: "Liverpool F.C."
  }, "Liverpool")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "16"), _react.default.createElement("td", null, "12"), _react.default.createElement("td", null, "10"), _react.default.createElement("td", null, "63"), _react.default.createElement("td", null, "50"), _react.default.createElement("td", null, "+13"), _react.default.createElement("td", null, "60"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "9"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Stoke_City_F.C.",
    title: "Stoke City F.C."
  }, "Stoke City")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "14"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "15"), _react.default.createElement("td", null, "41"), _react.default.createElement("td", null, "55"), _react.default.createElement("td", null, "\u221214"), _react.default.createElement("td", null, "51"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "10"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Chelsea_F.C.",
    title: "Chelsea F.C."
  }, "Chelsea")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "12"), _react.default.createElement("td", null, "14"), _react.default.createElement("td", null, "12"), _react.default.createElement("td", null, "59"), _react.default.createElement("td", null, "53"), _react.default.createElement("td", null, "+6"), _react.default.createElement("td", null, "50"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "11"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Everton_F.C.",
    title: "Everton F.C."
  }, "Everton")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "11"), _react.default.createElement("td", null, "14"), _react.default.createElement("td", null, "13"), _react.default.createElement("td", null, "59"), _react.default.createElement("td", null, "55"), _react.default.createElement("td", null, "+4"), _react.default.createElement("td", null, "47"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "12"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Swansea_City_A.F.C.",
    title: "Swansea City A.F.C."
  }, "Swansea City")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "12"), _react.default.createElement("td", null, "11"), _react.default.createElement("td", null, "15"), _react.default.createElement("td", null, "42"), _react.default.createElement("td", null, "52"), _react.default.createElement("td", null, "\u221210"), _react.default.createElement("td", null, "47"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "13"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Watford_F.C.",
    title: "Watford F.C."
  }, "Watford")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "12"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "17"), _react.default.createElement("td", null, "40"), _react.default.createElement("td", null, "50"), _react.default.createElement("td", null, "\u221210"), _react.default.createElement("td", null, "45"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "14"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C.",
    title: "West Bromwich Albion F.C."
  }, "West Bromwich Albion")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "10"), _react.default.createElement("td", null, "13"), _react.default.createElement("td", null, "15"), _react.default.createElement("td", null, "34"), _react.default.createElement("td", null, "48"), _react.default.createElement("td", null, "\u221214"), _react.default.createElement("td", null, "43"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "15"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Crystal_Palace_F.C.",
    title: "Crystal Palace F.C."
  }, "Crystal Palace")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "11"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "18"), _react.default.createElement("td", null, "39"), _react.default.createElement("td", null, "51"), _react.default.createElement("td", null, "\u221212"), _react.default.createElement("td", null, "42"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "16"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/A.F.C._Bournemouth",
    title: "A.F.C. Bournemouth"
  }, "AFC Bournemouth")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "11"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "18"), _react.default.createElement("td", null, "45"), _react.default.createElement("td", null, "67"), _react.default.createElement("td", null, "\u221222"), _react.default.createElement("td", null, "42"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "17"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Sunderland_A.F.C.",
    title: "Sunderland A.F.C."
  }, "Sunderland")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "12"), _react.default.createElement("td", null, "17"), _react.default.createElement("td", null, "48"), _react.default.createElement("td", null, "62"), _react.default.createElement("td", null, "\u221214"), _react.default.createElement("td", null, "39"), _react.default.createElement("td", null)), _react.default.createElement("tr", null, _react.default.createElement("th", null, "18"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Newcastle_United_F.C.",
    title: "Newcastle United F.C."
  }, "Newcastle United"), " ", _react.default.createElement("strong", null, "(R)")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "10"), _react.default.createElement("td", null, "19"), _react.default.createElement("td", null, "44"), _react.default.createElement("td", null, "65"), _react.default.createElement("td", null, "\u221221"), _react.default.createElement("td", null, "37"), _react.default.createElement("td", null, "Relegation to the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship",
    title: "2016\u201317 Football League Championship"
  }, "Football League Championship"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "19"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Norwich_City_F.C.",
    title: "Norwich City F.C."
  }, "Norwich City"), " ", _react.default.createElement("strong", null, "(R)")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "9"), _react.default.createElement("td", null, "7"), _react.default.createElement("td", null, "22"), _react.default.createElement("td", null, "39"), _react.default.createElement("td", null, "67"), _react.default.createElement("td", null, "\u221228"), _react.default.createElement("td", null, "34"), _react.default.createElement("td", null, "Relegation to the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship",
    title: "2016\u201317 Football League Championship"
  }, "Football League Championship"))), _react.default.createElement("tr", null, _react.default.createElement("th", null, "20"), _react.default.createElement("td", null, _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/Aston_Villa_F.C.",
    title: "Aston Villa F.C."
  }, "Aston Villa"), " ", _react.default.createElement("strong", null, "(R)")), _react.default.createElement("td", null, "38"), _react.default.createElement("td", null, "3"), _react.default.createElement("td", null, "8"), _react.default.createElement("td", null, "27"), _react.default.createElement("td", null, "27"), _react.default.createElement("td", null, "76"), _react.default.createElement("td", null, "\u221249"), _react.default.createElement("td", null, "17"), _react.default.createElement("td", null, "Relegation to the ", _react.default.createElement("a", {
    href: "https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship",
    title: "2016\u201317 Football League Championship"
  }, "Football League Championship")))));
});
//# sourceMappingURL=table.story.js.map