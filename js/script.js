// http://timeline.knightlab.com/docs/options.html 
                var additionalOptions = { 
                    start_at_end: true, 
    default_bg_color: {r:0, g:0, b:0}, 
    timenav_height: 250 
};
                //usage: 
var sample_json = {
    "events": [
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "minute": "30",
                "year": "2000",
                "month": "11",
                "day": "21",
                "hour": "13"
            },
            "text": {
                "text": "eat shit\n\n\n\n\nJohn J Lavorato@ENRON\n11/18/2000 01:01 PM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\nFootball bets 200 each\n\nMinn -9.5\nBuff +2.5\nPhil -7\nIndi -4.5\nCinnci +7\nDet +6\nclev +16\nDen +9.5\nDall +7.5\nJack +3.5"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "minute": "40",
                "year": "2001",
                "month": "2",
                "day": "21",
                "hour": "9"
            },
            "text": {
                "text": "Are you free for drinks either Monday or Wednesday?"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "minute": "36",
                "year": "2001",
                "month": "10",
                "day": "28",
                "hour": "5"
            },
            "text": {
                "text": "current -260\nall 150\n \njack +7\nminn +3\ncinci+3\nsf+2.5\nnew orleans +12\ncar +2.5\ndall +3\noak +1.5\nnew eng +7\nbuff +7\nseattle +2.5\nwash +8"
            }
        }
    ]
};// two arguments: the id of the Timeline container (no '#')
                // and the JSON object or an instance of TL.TimelineConfig created from
                // a suitable JSON object
                window.timeline = new TL.Timeline('timeline-embed'
                //, timeline_json
                , sample_json
);