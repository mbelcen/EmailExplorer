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
                "year": "2000",
                "minute": "22",
                "hour": "19",
                "month": "3",
                "day": "29"
            },
            "text": {
                "text": "I am changing the way the curve is generated starting in Jan 2004 to better \nreplicate seasonal fundamentals.  There are convincing arguments as to why \nthe summer/winter spreads should tighten over time.  However, in the previous \nmethodology they blew out.  For instance summer/winter in Cal 3 was .232 \nwhile Cal 10 was .256.  \nI have added a seasonality dampening function that both contracts the \nsummer/winter spread and applies a premium to the electric load demand months \nof July and August over time.\n\nThe formula for the curve remains the same except for a premium lookup for \nthe month as well as for the year.  These premiums are as follows:\n\nJan  -.008\nFeb -.004\nMar -.001\nApr .002\nMay .003\nJun .004\nJul .004\nAug .004\nSep .003\nOct .002\nNov -.003\nDec -.006\n\n\nThese premiums start in Jan 2004\nOn Wednesday Jan 2003 settled 2.959,  the 3/4 spread was marked at .0375, the \n4/5 spread was marked at .0475.  \nIn the old methodology\nJan 2003  = 2.959\nJan 2004  = 2.959 + .0375 = 2.9965\nJan 2005  =          2.9965 + .0475 = 3.044\n\n\nIn the new methodology\nJan 2003  = 2.959\nJan 2004  = 2.959 + .0375 - .008 =2.9885\nJan 2005  = 2.9885 + .0475 -.008 = 3.028\n\nThe only change in the formula is from:\nMonth x = Month (x- 1 year) + lookup on year on year table\nto\nMonth x = Month (x- 1 year) + lookup on year on year table + lookup on month \npremium table\n\nThe seasonality premiums will change over time and I will let you know when I \nchange them"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "24",
                "hour": "16",
                "month": "5",
                "day": "22"
            },
            "text": {
                "text": "---------------------- Forwarded by John Arnold/HOU/ECT on 05/22/2000 04:23 \nPM ---------------------------\n\n\nJohn Arnold\n05/22/2000 04:23 PM\nTo: Doug.rotenberg@enron.com\ncc: Rick Buy/HOU/ECT@ECT, John.J. Lavorato@enron.com, David \nHaug/ENRON_DEVELOPMENT@ENRON_DEVELOPMENT, Jeffrey A Shankman/HOU/ECT@ECT, \nJeff Skilling/Corp/Enron@ENRON \nSubject: \n\nDoug:\nTo confirm the pricing of the LNG dela::\n\nI can show a $3.01 bid for the Nymex portion of 160,000 mmbtu/day for the \ntime period Jan 2003-Dec 2014.  The bid on Henry Hub basis for same time \nperiod is -$.0025 resulting in fix price of $3.0075; the bid on Sonat basis \nis -$.0175 translating into a bid of $2.9925.\n\nNotional volume = 70,128 contracts.\nPV volume = 37,658 contracts.\nExposure per $.01 move = $3,760,000\n\nJohn"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "3",
                "hour": "13",
                "month": "7",
                "day": "10"
            },
            "text": {
                "text": "I have asked the crude group to give a presentation on fuel oil supply and \ndemand which will take place Wednesday July 12 at 2:15 in the big boardroom \non the 30th floor. I would encourage everyone to come and bring any traders \nthat you think would benefit from it."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "42",
                "hour": "16",
                "month": "7",
                "day": "10"
            },
            "text": {
                "text": "I spoke to Vlady this afternoon regarding the alternative VAR methodologies.  \nI think changing to a Riskmetrics historical VAR system is more defendable \nand objective, will provide more consistent results, and will create more \nrealistic results.  I understand Vince has a similar opinion.   \nJohn."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "51",
                "hour": "15",
                "month": "8",
                "day": "3"
            },
            "text": {
                "text": "The following is a summary of the trades EES did today:\n \n  # buys  # sells\nSep  5 / day  5 / day \nOct  4 / day\nNov-Mar 3 / day  2 / day\nApr-Oct  1.5 / day 2.5 / day\n \nTotal contracts traded = 2045\n\nThought you should know...\nJohn"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "46",
                "hour": "15",
                "month": "8",
                "day": "17"
            },
            "text": {
                "text": "If J. Franco wins, you win $2425\nIf he loses, you lose $75"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "48",
                "hour": "8",
                "month": "8",
                "day": "21"
            },
            "text": {
                "text": "Had Carlos Franco just shot a 49 yesterday instead of a 70, you would have \nwon."
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "42",
                "hour": "10",
                "month": "8",
                "day": "21"
            },
            "text": {
                "text": "XXXX XXX"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "4",
                "hour": "11",
                "month": "8",
                "day": "21"
            },
            "text": {
                "text": "Is that hugs or kisses?\n\n\n\n\nJohn J Lavorato@ENRON\n08/21/2000 10:42 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: Re:  \n\nXXXX XXX"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "40",
                "hour": "10",
                "month": "9",
                "day": "20"
            },
            "text": {
                "text": "COO's:\nDo either of you have an objection to using Cantor as an OTC broker?"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "33",
                "hour": "10",
                "month": "9",
                "day": "25"
            },
            "text": {
                "text": "I don't but I need a golf shirt.  Just kidding."
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "1",
                "hour": "20",
                "month": "10",
                "day": "8"
            },
            "text": {
                "text": "I hope you are talking to Phillip to get you system needs as part of this \nproject.\n---------------------- Forwarded by John J Lavorato/Corp/Enron on 10/08/2000 \n07:55 PM ---------------------------\nBeth Perlman @ ECT   10/06/2000 09:25 AM\n\nTo: John J Lavorato/Corp/Enron@Enron\ncc:  \n\nSubject: Consolidated positions: Issues & To Do list\n\nJohn,\n\nWe are working with the traders and have pushed the responsibility for \nbuilding consensus on Phillip Allen.  I just wanted to keep you in the loop.  \nAny assistance that you can offer is greatly appreciated.\n\nBeth\n\n----- Forwarded by Beth Perlman/HOU/ECT on 10/06/2000 09:22 AM -----\n\n\tRichard Burchfield\n\t10/06/2000 08:59 AM\n\t\t \n\t\t To: Phillip K Allen/HOU/ECT@ECT\n\t\t cc: Beth Perlman/HOU/ECT@ECT\n\t\t Subject: Consolidated positions: Issues & To Do list\n\nPhillip,\n Below is the issues & to do list as we go forward with documenting the \nrequirements for consolidated physical/financial positions and transport \ntrade capture. What we need to focus on is the first bullet in Allan's list; \nthe need for a single set of requirements. Although the meeting with Keith, \non Wednesday,  was informative the solution of creating a infinitely dynamic \nconsolidated position screen, will be extremely difficult and time \nconsuming.  Throughout the meeting on Wednesday, Keith alluded to the \ninability to get consensus amongst the traders on the presentation of the \nconsolidated position, so the solution was to make it so that a trader can \narrange the position screen to their liking (much like Excel). What needs to \nhappen on Monday from 3 - 5 is a effort to design a desired layout for the \nconsolidated position screen, this is critical. This does not exclude \nbuilding a capability to create a more flexible position presentation for the \nfuture, but in order to create a plan that can be measured we need firm \nrequirements. Also, to reiterate that the goals of this project is a project \nplan on consolidate physical/financial positions and transport trade capture. \nThe other issues that have been raised will be capture as projects on to \nthemselves, and will need to be prioritised as efforts outside of this \nproject.\n\nI have been involved in most of the meetings and the discussions have been \ngood. I believe there has been good communication between the teams, but now \nwe need to have focus on the objectives we set out to solve.\n\nRichard  \n---------------------- Forwarded by Richard Burchfield/HOU/ECT on 10/06/2000 \n08:34 AM ---------------------------\n\n\nAllan Severude\n10/05/2000 06:03 PM\nTo: Richard Burchfield/HOU/ECT@ECT\ncc: Peggy Alix/HOU/ECT@ECT, Russ Severson/HOU/ECT@ECT, Scott \nMills/HOU/ECT@ECT, Kenny Ha/HOU/ECT@ECT \nSubject: Consolidated positions: Issues & To Do list\n\n\nFrom our initial set of meetings with the traders regarding consolidated \npositions, I think we still have the following issues:\nWe don't have a single point of contact from the trading group.  We've had \nthree meetings which brought out very different issues from different \ntraders.  We really need a single point of contact to help drive the trader \nrequirements and help come to a consensus regarding the requirements.\nWe're getting hit with a lot of different requests, many of which appear to \nbe outside the scope of position consolidation.\n\nThings left to do:\nI think it may be useful to try to formulate a high level project goal to \nmake it as clear as possible what we're trying to accomplish with this \nproject.  It'll help determine which requests fall under the project scope.\nGo through the list of requests to determine which are in scope for this \nproject and which fall out of scope.\nFor those in scope, work to define relative importance (priority) of each and \nwork with traders to define the exact requirements of each.\nDefine the desired lay out of the position manager screen: main view and all \ndrill downs.\nUse the above to formulate a project plan.\n\nThings requested thus far (no particular order):\nInclusion of Sitara physical deals into the TDS position manager and deal \nticker.\nCustomized rows and columns in the position manager (ad hoc rows/columns that \nadd up existing position manager rows/columns).\nNew drill down in the position manager to break out positions by: physical, \ntransport, swaps, options, ...\nAddition of a curve tab to the position manager to show the real-time values \nof all curves on which the desk has a position.\nAbility to split the current position grid to allow daily positions to be \nshown directly above monthly positions.  Each grouped column in the top grid \nwould be tied to a grouped column in the bottom grid.\nAbility to properly show curve shift for float-for-float deals; determine the \nappropriate positions to show for each:\nGas Daily for monthly index,\nPhysical gas for Nymex,\nPhysical gas for Inside Ferc,\nPhysical gas for Mid market.\nAbility for TDS to pull valuation results based on a TDS flag instead of \nusing official valuations.\nPosition and P&L aggregation across all gas desks.\nAbility to include the Gas Price book into TDS:\nInclusion of spread options in our systems.  Ability to handle volatility \nskew and correlations.\nAbility to revalue all options incrementally throughout the trading day.  \nApproximate delta changes between valuations using instantaneous gamma or a \ngamma grid.\nValuation of Gas Daily options.\nA new position screen for options (months x strike x delta).  TBD.\nInclusion of positions for exotic options currently managed in spreadsheets.\nAbility to isolate the position change due to changed deals in the position \nmanager.\nAbility to view change deal P&L in the TDS deal ticker.  Show new deal terms, \nprior deal terms, and net P&L affect of the change.\nEliminate change deals with no economic impact from the TDS deal ticker.\nPosition drill down in the position manager to isolate the impact of \nindividual deals on the position total in a grid cell.\nBenchmark positions in TDS.\nDeployment of TDS in Canada. Currency and volume uom conversions. Implicit \nand explicit position break out issues.\n\n-- Allan.\n\nPS: Colleen is setting up a meeting tomorrow to discuss the direction for \ntransport.  Hopefully we'll know much better where that part stands at that \npoint."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "13",
                "hour": "9",
                "month": "10",
                "day": "19"
            },
            "text": {
                "text": "if only i didn't have a position today I'd be ok"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "26",
                "hour": "13",
                "month": "10",
                "day": "19"
            },
            "text": {
                "text": "No problem bensen"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "3",
                "hour": "10",
                "month": "10",
                "day": "23"
            },
            "text": {
                "text": "I think we are making great progress on the systems side.  I would like to \nset a deadline of November 10th to have a plan on all North American projects \n(I'm ok if fundementals groups are excluded) that is signed off on by \ncommercial, Sally's world, and Beth's world.  When I say signed off I mean \nthat I want signitures on a piece of paper that everyone is onside with the \nplan for each project.  If you don't agree don't sign. If certain projects \n(ie. the gas plan) are not done yet then lay out a timeframe that the plan \nwill be complete.  I want much more in the way of specifics about objectives \nand timeframe.\n\nThanks for everyone's hard work on this.\n\nJohn"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "1",
                "hour": "13",
                "month": "11",
                "day": "18"
            },
            "text": {
                "text": "Football bets 200 each\n\nMinn -9.5\nBuff +2.5\nPhil -7\nIndi -4.5\nCinnci +7\nDet +6\nclev +16\nDen +9.5\nDall +7.5\nJack +3.5"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "30",
                "hour": "21",
                "month": "11",
                "day": "21"
            },
            "text": {
                "text": "eat shit\n\n\n\n\nJohn J Lavorato@ENRON\n11/18/2000 01:01 PM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\nFootball bets 200 each\n\nMinn -9.5\nBuff +2.5\nPhil -7\nIndi -4.5\nCinnci +7\nDet +6\nclev +16\nDen +9.5\nDall +7.5\nJack +3.5"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "42",
                "hour": "9",
                "month": "11",
                "day": "23"
            },
            "text": {
                "text": "250 per\n\nNew England +6\nOver 37 1/2 NE/DET\nMinn -7 1/2\nBuff +3 1/2\nMiami +5 1/2\nPhil +6 1/2\nClev +16\nChic +7\nOak +11\nJack +3 1/2\nDen -3\nKC -2\nGiants/Ariz over 38\n\nCurrent 3730"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "45",
                "hour": "17",
                "month": "11",
                "day": "26"
            },
            "text": {
                "text": "Oak -11 or Atl +11  ????\n\nBet voided\n\n\n\n\nJohn J Lavorato@ENRON\n11/23/2000 09:42 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\n250 per\n\nNew England +6\nOver 37 1/2 NE/DET\nMinn -7 1/2\nBuff +3 1/2\nMiami +5 1/2\nPhil +6 1/2\nClev +16\nChic +7\nOak +11\nJack +3 1/2\nDen -3\nKC -2\nGiants/Ariz over 38\n\nCurrent 3730"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "55",
                "hour": "20",
                "month": "11",
                "day": "26"
            },
            "text": {
                "text": "That's cheap"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "1",
                "hour": "21",
                "month": "11",
                "day": "26"
            },
            "text": {
                "text": "who were you trying to bet on??\n\n\n\n\nJohn J Lavorato@ENRON\n11/26/2000 08:55 PM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: Re:  \n\nThat's cheap"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "40",
                "hour": "7",
                "month": "11",
                "day": "27"
            },
            "text": {
                "text": "l.a. but I'll kill it.  1 went 6-4 with two pushes.  up 400 makes a balance \nof 4130."
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "17",
                "hour": "18",
                "month": "12",
                "day": "2"
            },
            "text": {
                "text": "Giants +6\nCarolina +7 1/2\nCinci -4\nDenver +1 1/2\nTease Pitt +9 under 48 1/2\nSeattle Pickm\nPhil +3\nSF -2 1/2\nIndi-jets over 44\nJack -14 1/2\n\nAll 250\n\nI have the balance at work."
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "1",
                "hour": "18",
                "month": "12",
                "day": "3"
            },
            "text": {
                "text": "green bay and chic under 39"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "59",
                "hour": "16",
                "month": "12",
                "day": "4"
            },
            "text": {
                "text": "current 6300\n\nover 39 1/2\n400"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "0",
                "hour": "17",
                "month": "12",
                "day": "4"
            },
            "text": {
                "text": "that was for chiefs and newengland.  just to be clear."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "12",
                "hour": "15",
                "month": "12",
                "day": "7"
            },
            "text": {
                "text": "A funny story:\nBecause Access was up 75 cents last night, Nymex made a trading limit of \nunchanged to +150.  After 20 minutes of trading, we were at unchanged and the \nexchange stopped trading for an hour.  \nRappaport, the exchange president, was standing by to make sure everything \nwas orderly.  Obviously, the locals weren't too happy about the exchange \nclosing.  One yelled at Rappaport...\n\"Why don't you take your million dollar bonus and go buy Enron stock\""
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "48",
                "hour": "15",
                "month": "12",
                "day": "8"
            },
            "text": {
                "text": "---------------------- Forwarded by John Arnold/HOU/ECT on 12/08/2000 03:48 \nPM ---------------------------\n   \n\t\n\t\n\tFrom:  Bill Berkeland @ ENRON                           12/08/2000 03:43 PM\n\t\n\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: Burning Fat\n\n\n---------------------- Forwarded by Bill Berkeland/Corp/Enron on 12/08/2000 \n03:43 PM ---------------------------\n   \n\t\n\t\n\tFrom:  Jennifer Fraser @ ECT                           12/07/2000 02:40 PM\n\t\n\nTo: Sarah Mulholland/HOU/ECT@ECT, Stewart Peter/LON/ECT@ECT, Niamh \nClarke/LON/ECT@ECT, Alex Mcleish/EU/Enron@Enron, Caroline \nAbramo/Corp/Enron@Enron, Mark Smith/Corp/Enron@Enron, Vikas \nDwivedi/NA/Enron@Enron, Bill Berkeland/Corp/Enron@Enron\ncc:  \n\nSubject: Burning Fat\n\nVikas - What's the market in nat gas versus lard and heating oil versus olive \noil\n---------------------- Forwarded by Jennifer Fraser/HOU/ECT on 12/07/2000 \n02:39 PM ---------------------------\n\n\n\"Joel K. Gamble\" <Joel_K._Gamble@arrowindustries.com>@wwwww.aescon.com on \n12/07/2000 12:33:40 PM\nSent by: owner-natgas@wwwww.aescon.com\nTo: natgas@wwwww.aescon.com\ncc:  \nSubject: Burning Fat\n\n\n\n\nSome of our food processing factories in the Midwest which have fuel switching\ncapability find it profitable at these gas prices to burn rendered animal fat \nin\nlieu of natural gas.  Apparently, the doesn't hurt the boiler machinery.  One \nof\nthe guys responsible for this move did a back of the envelope calculation and\nfound that at $8.00 / Dth NG prices it was even profitable to buy olive oil in\nbulk as a heating fuel.  They haven't used veggie oil yet but are considering\nit.  Anyone else hear any stories of end users switching to unusual fuels?\n\nRegards"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "58",
                "hour": "9",
                "month": "12",
                "day": "10"
            },
            "text": {
                "text": "minn +3 1/2\njack -16 1/2\ntenn-cinnci under35\ngb-det under 39 1/2\ntb +2 1/2\nnew england +2 1/2\npitt +3 1/2\nphil-clev under 33 1/2\nseattle +10\njets +9 1/2 and over 40 1/2 tease\n\nas discussed."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "58",
                "hour": "11",
                "month": "12",
                "day": "11"
            },
            "text": {
                "text": "why does everybody in this company know my p&l?????"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "10",
                "hour": "16",
                "month": "12",
                "day": "11"
            },
            "text": {
                "text": "cant handle the pressure of big money??\n\n\n\n\nJohn J Lavorato@ENRON\n12/10/2000 09:58 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\nminn +3 1/2\njack -16 1/2\ntenn-cinnci under35\ngb-det under 39 1/2\ntb +2 1/2\nnew england +2 1/2\npitt +3 1/2\nphil-clev under 33 1/2\nseattle +10\njets +9 1/2 and over 40 1/2 tease\n\nas discussed."
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "27",
                "hour": "10",
                "month": "12",
                "day": "17"
            },
            "text": {
                "text": "You goated me into it,\n\nHere goes\n\n400/per\n\nMinn -8\nNew Orleans -10\nDenver -3\nDenver-KC under 48\nJack -10\nClev +16\nChic +6 1/2\nIndi-Mia under 42\nBalt -15\n\n\nJohn I would like to sit with you a couple days this week if you'll let me.  \nI'm very serious about covering you when your out in January.  I would like \nto get a sense of what its like dealing with your EOL madness.  Let me know.\n\nLavo"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "2",
                "hour": "19",
                "month": "12",
                "day": "17"
            },
            "text": {
                "text": "giants -7\ngiants - dallas minus 37\n\nboth 400"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "51",
                "hour": "10",
                "month": "12",
                "day": "23"
            },
            "text": {
                "text": "john\n\n\nI cant' seem to make my gambling problem go away.\n\nbills +3 250\ndenver -7 250\njack +3 1/2 250"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "45",
                "hour": "8",
                "month": "12",
                "day": "24"
            },
            "text": {
                "text": "rams -3.5\nwash -7\nraiders -9 1/2\nbalt -5\nbears lions over 37\neagles bengals under 35 1/2\npats +4\nvikings +5.5"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "10",
                "hour": "9",
                "month": "12",
                "day": "24"
            },
            "text": {
                "text": "those were all 250"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "16",
                "hour": "21",
                "month": "12",
                "day": "25"
            },
            "text": {
                "text": "asshole\n\n\n\n\nJohn J Lavorato@ENRON\n12/24/2000 08:45 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\nrams -3.5\nwash -7\nraiders -9 1/2\nbalt -5\nbears lions over 37\neagles bengals under 35 1/2\npats +4\nvikings +5.5"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "17",
                "hour": "21",
                "month": "12",
                "day": "25"
            },
            "text": {
                "text": "asshole\n\n\n\n\nJohn J Lavorato@ENRON\n12/23/2000 10:51 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\njohn\n\n\nI cant' seem to make my gambling problem go away.\n\nbills +3 250\ndenver -7 250\njack +3 1/2 250"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "34",
                "hour": "19",
                "month": "12",
                "day": "26"
            },
            "text": {
                "text": "Here is the name of an available options trader:\nJeremy Sorkin\nVP, Deutsche Bank\n713 757 9200\n\nWould fit Enron culture, but have had little contact with him professionally.\nMight be worth bringing him in.   Tell me if you want me to call him."
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "35",
                "hour": "7",
                "month": "12",
                "day": "27"
            },
            "text": {
                "text": "I would like to do a phone interview and then I will bring him in if I like \nhim.\n\nSend me a resume and then I'll set him up."
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "49",
                "hour": "8",
                "month": "12",
                "day": "30"
            },
            "text": {
                "text": "tease colts +4 under 48 250\n\n   tease colts +4 over 36 250\n\n   tease miami +8 under 48 250\n  \n   tease miami +8 over 36 250\n  \n\nst louis minus 6 1/2 250"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2000",
                "minute": "43",
                "hour": "10",
                "month": "12",
                "day": "31"
            },
            "text": {
                "text": "Almost pulled off the 4 tease yesterday.\nI was robbed\n\nDenver +3 350\nPhili +3 350"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "36",
                "hour": "16",
                "month": "1",
                "day": "1"
            },
            "text": {
                "text": "i would have paid you in full Tueday morning and resigned my bookie \nservices...\n\n\n\n\nJohn J Lavorato@ENRON\n12/31/2000 10:43 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\nAlmost pulled off the 4 tease yesterday.\nI was robbed\n\nDenver +3 350\nPhili +3 350"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "25",
                "hour": "7",
                "month": "1",
                "day": "2"
            },
            "text": {
                "text": "current including tb -500 equals 4170"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "57",
                "hour": "7",
                "month": "1",
                "day": "2"
            },
            "text": {
                "text": "you must bet sugar and orange bowls\n\n\n\n\nJohn J Lavorato@ENRON\n01/02/2001 07:25 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\ncurrent including tb -500 equals 4170"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "23",
                "hour": "16",
                "month": "1",
                "day": "2"
            },
            "text": {
                "text": "i'm paying you in stock options"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "53",
                "hour": "8",
                "month": "1",
                "day": "6"
            },
            "text": {
                "text": "current 4570\n\nminn -8 1/2\noakland -9\ntease minn-2 1/2 over 43 1/2\n\nall 200"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "10",
                "hour": "22",
                "month": "1",
                "day": "6"
            },
            "text": {
                "text": "current 5170\n\ntenn -6 200\nny -4 200"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "6",
                "hour": "7",
                "month": "1",
                "day": "16"
            },
            "text": {
                "text": "current 5110 \nbig one coming on the superbowl."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "14",
                "hour": "15",
                "month": "2",
                "day": "19"
            },
            "text": {
                "text": "We've started breaking out separate P&L's.  It's been a very difficult \nprocess so far for a number of reasons.  The last processes will be \nseparating out the P&L on the executive reports and on VAR. That will happen \nthis week.  Meanwhile, the P&L will be retroactive to the start of the year \nand we are going through all the positions such that the total skew is zero \nor an adjustment will be made to get it there.   At the end of the year there \nwill be a number next to Maggi's name that he will not dispute.  His \ncontribution to the fixed side when I'm on vacations or in meetings will \ncontinue to be a subjective process.\n\n\nFrom: John J Lavorato/ENRON@enronXgate on 02/19/2001 10:19 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: \n\nJohn\n\nI don't see Maggie's line on the P/L\n\nLavo"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "40",
                "hour": "17",
                "month": "2",
                "day": "21"
            },
            "text": {
                "text": "Are you free for drinks either Monday or Wednesday?"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "6",
                "hour": "7",
                "month": "2",
                "day": "22"
            },
            "text": {
                "text": "Monday it is\n\n\nFrom: John J Lavorato/ENRON@enronXgate on 02/21/2001 06:27 PM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: RE:  \n\nYes\n\n -----Original Message-----\nFrom:  Arnold, John  \nSent: Wednesday, February 21, 2001 5:41 PM\nTo: Lavorato, John\nSubject:  \n\nAre you free for drinks either Monday or Wednesday?"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "42",
                "hour": "18",
                "month": "2",
                "day": "25"
            },
            "text": {
                "text": "Just a reminder about drinks Monday night.."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "10",
                "hour": "19",
                "month": "2",
                "day": "25"
            },
            "text": {
                "text": "not really...\n\nalready have plans on thursday .\n\nare you going to the NYMEX candidate cocktail hour Tuesday?\n\n\nFrom: John J Lavorato/ENRON@enronXgate on 02/25/2001 07:02 PM\nTo: John Arnold/HOU/ECT@ECT\ncc: =20\nSubject: RE:\n\noh god is there an agenda.\n=01;\nWould dinner Thursday work instead.\n=01;\n=01;\n\n-----Original Message-----=20\nFrom: Arnold, John=20\nSent: Sun 2/25/2001 6:42 PM=20\nTo: Lavorato, John=20\nCc:=20\nSubject:=20\n\n\n=01;"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "51",
                "hour": "8",
                "month": "2",
                "day": "26"
            },
            "text": {
                "text": "He just rescheduled to Wednesday.   How about dinner on Wednesday after that ?\n\n\nFrom: John J Lavorato/ENRON@enronXgate on 02/26/2001 07:31 AM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: RE: \n\nYour buddy Beau invited me.  How about prior to that or after that on Tuesday.\n\n -----Original Message-----\nFrom:  Arnold, John  \nSent: Sunday, February 25, 2001 7:10 PM\nTo: Lavorato, John\nSubject: RE:\n\nnot really...\n\nalready have plans on thursday .\n\nare you going to the NYMEX candidate cocktail hour Tuesday?\n\n\nFrom: John J Lavorato/ENRON@enronXgate on 02/25/2001 07:02 PM\nTo: John Arnold/HOU/ECT@ECT\ncc:  \nSubject: RE:\n\noh god is there an agenda.\n \nWould dinner Thursday work instead.\n \n \n\n-----Original Message----- \nFrom: Arnold, John \nSent: Sun 2/25/2001 6:42 PM \nTo: Lavorato, John \nCc: \nSubject:"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "25",
                "hour": "19",
                "month": "2",
                "day": "27"
            },
            "text": {
                "text": "Forgot, I'm leaving town tomorrow afternoon.  Will be back Thursday morn.  \nWe'll do it some other time."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "56",
                "hour": "10",
                "month": "3",
                "day": "5"
            },
            "text": {
                "text": "dinner or drinks tonight?"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "17",
                "hour": "17",
                "month": "3",
                "day": "14"
            },
            "text": {
                "text": "---------------------- Forwarded by John Arnold/HOU/ECT on 03/14/2001 05:16 \nPM ---------------------------\n\n\n\"jfk51272@yahoo.com\" <jfk51272 on 03/14/2001 11:13:41 AM\nTo: jarnold@enron.com\ncc:  \nSubject: Yahoo! Sports Tournament Pick'em\n\n\nWednesday, March 14, 09:13:39 AM PT\n\nHello jarnold@enron.com,\n\nYou have been invited to join jfk51272's Private Group in Yahoo!\nSports Tournament Pick'em.\n\nIn order to join the group, just go to\nhttp://tournament.fantasysports.yahoo.com/men, sign up and\nchoose to Join a Private Group. Then, when prompted, enter the\nfollowing information...\n\nGroup ID#: 36853\nPassword: done\n\nWe will send you a confirmation with further details once you\nhave completed the registration process.\n\nNote from jfk51272:\nEntry Fee is U.S. $50.00  WINNER TAKE ALL!!!!\n\n--Tournament Pick'em Commissioner\nhttp://tournament.fantasysports.yahoo.com/men"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "22",
                "hour": "14",
                "month": "3",
                "day": "19"
            },
            "text": {
                "text": "dinner this week?  i'm free mon-wed"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "36",
                "hour": "18",
                "month": "3",
                "day": "29"
            },
            "text": {
                "text": "Kim:\nCan I get  4 tix for the following games:\nApr 21 or 22 vs. St Louis\nJun 15 vs Texas\nJun 17 vs Texas\nThanks,\nJohn\n\n\nFrom: John J Lavorato/ENRON@enronXgate@enronXgate on 03/27/2001 09:45 AM\nSent by: Kimberly Hillis/ENRON@enronXgate\nTo: Phillip K Allen/HOU/ECT@ECT, W David Duran/HOU/ECT@ECT, Joseph \nDeffner/ENRON@enronXgate, Brian Redmond/HOU/ECT@ECT, Colleen \nSullivan/HOU/ECT@ECT, Mike Grigsby/HOU/ECT@ECT, Mike Swerzbin/HOU/ECT@ECT, \nJohn Arnold/HOU/ECT@ECT, Kevin M Presto/HOU/ECT@ECT, Hunter S \nShively/HOU/ECT@ECT, Fletcher J Sturm/HOU/ECT@ECT, Rogers \nHerndon/HOU/ECT@ect, Barry Tycholiz/NA/Enron@ENRON, Dana \nDavis/ENRON@enronXgate, Fred Lagrasta/HOU/ECT@ECT, Thomas A \nMartin/HOU/ECT@ECT, Scott Neal/HOU/ECT@ECT, Edward D \nBaughman/ENRON@enronXgate, Harry Arora/ENRON@enronXgate, Don \nMiller/HOU/ECT@ECT, Ozzie Pagan/ENRON@enronXgate, Michael L \nMiller/NA/Enron@Enron, Richard Lydecker/Corp/Enron@Enron, Jim \nSchwieger/HOU/ECT@ECT, Carl Tricoli/Corp/Enron@Enron, Frank W \nVickers/NA/Enron@Enron, Mark Whitt/NA/Enron@Enron, Ed McMichael/HOU/ECT@ECT, \nJesse Neyman/HOU/ECT@ECT, Greg Blair/Corp/Enron@Enron, Douglas \nClifford/NY/ECT@ECT, Michael J Miller/Enron Communications@Enron \nCommunications, Allan Keel/ENRON@enronXgate, Scott Josey/ENRON@enronXgate, \nBruce Sukaly/ENRON@enronXgate, Julie A Gomez/HOU/ECT@ECT, Jean \nMrha/NA/Enron@Enron, C John Thompson/ENRON@enronXgate, Steve \nPruett/ENRON@enronXgate, Gil Muhl/Corp/Enron@ENRON, Michelle \nParks/ENRON@enronXgate, Brad Alford/NA/Enron@Enron, Robert Greer/HOU/ECT@ECT\ncc: Louise Kitchen/HOU/ECT@ECT, Tammie Schoppe/HOU/ECT@ECT \nSubject: Astro's Baseball Season Tickets\n\nThe 2001 Astro's season is about to kick-off and Enron Americas Office of the \nChairman has four tickets to each game available for customer events.\n\nIf you are interested in using the tickets, please call Kim Hillis at x30681."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "59",
                "hour": "17",
                "month": "4",
                "day": "25"
            },
            "text": {
                "text": "thanks a lot"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "12",
                "hour": "8",
                "month": "5",
                "day": "7"
            },
            "text": {
                "text": "none\n\n\nFrom: John J Lavorato/ENRON@enronXgate on 05/07/2001 07:46 AM\nTo: Phillip K Allen/HOU/ECT@ECT, John Arnold/HOU/ECT@ECT, Harry \nArora/ENRON@enronXgate, Berney C Aucoin/HOU/ECT@ECT, Edward D \nBaughman/ENRON@enronXgate, Tim Belden/ENRON@enronXgate, Christopher F \nCalger/ENRON@enronXgate, Derek Davies/CAL/ECT@ECT, Mark Dana \nDavis/HOU/ECT@ECT, Joseph Deffner/ENRON@enronXgate, Paul Devries/TOR/ECT@ECT, \nW David Duran/HOU/ECT@ECT, Chris H Foster/ENRON@enronXgate, Chris \nGaskill/ENRON@enronXgate, Doug Gilbert-Smith/Corp/Enron@ENRON, Rogers \nHerndon/HOU/ECT@ect, Ben Jacoby/HOU/ECT@ECT, Scott Josey/ENRON@enronXgate, \nKyle Kitagawa/CAL/ECT@ECT, Fred Lagrasta/ENRON@enronXgate, John J \nLavorato/ENRON@enronXgate, Eric LeDain/CAL/ECT@ECT, Laura \nLuce/Corp/Enron@Enron, Thomas A Martin/ENRON@enronXgate, Jonathan \nMcKay/CAL/ECT@ECT, Ed McMichael/HOU/ECT@ECT, Don Miller/ENRON@enronXgate, \nMichael L Miller/ENRON@enronXgate, Rob Milnthorp/CAL/ECT@ECT, Jean \nMrha/ENRON@enronXgate, Scott Neal/HOU/ECT@ECT, David Parquet/SF/ECT@ECT, \nKevin M Presto/HOU/ECT@ECT, Brian Redmond/ENRON@enronXgate, Hunter S \nShively/ENRON@enronXgate, Fletcher J Sturm/HOU/ECT@ECT, \"Swerzbin, Mike\" \n<Mike.Swerzbin2@ENRON.com>@SMTP@enronXgate, C John Thompson/ENRON@enronXgate, \nCarl Tricoli/Corp/Enron@Enron, Barry Tycholiz/NA/Enron@ENRON, Frank W \nVickers/NA/Enron@Enron, Lloyd Will/HOU/ECT@ECT, Greg Wolfe/ENRON@enronXgate, \nMax Yzaguirre/NA/Enron@ENRON, John Zufferli/CAL/ECT@ECT\ncc:  \nSubject: \n\nI asked everyone for their A/A needs and received very little feedback.  \nPlease respond promptly.\n\n\nThanks  \n\nJohn"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "53",
                "hour": "17",
                "month": "5",
                "day": "22"
            },
            "text": {
                "text": "Hello Everyone.\n\nAEP has been very cooperative with us when we have posted numbers in error on EOL.  Please extend them back the favor if an issue comes up on their side.  Also please e-mail me if an issue comes up.\n\nThanks\n\nJohn"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "34",
                "hour": "14",
                "month": "9",
                "day": "13"
            },
            "text": {
                "text": "John\n\nAt your leisure can you interview this guy.  He is in Houston in a couple of weeks.  You may need him to resend his reume as I deleted it.  Read the email traffic below.\n\nThanks\n\n -----Original Message-----\nFrom: \tAlex Pritchartt <alex_pritchartt@yahoo.com>@ENRON [mailto:IMCEANOTES-Alex+20Pritchartt+20+3Calex+5Fpritchartt+40yahoo+2Ecom+3E+40ENRON@ENRON.com] \nSent:\tTuesday, September 11, 2001 1:02 AM\nTo:\tLavorato, John\nSubject:\tRE: friend of Bill McIlwain\n\nJohn,\n\nI appreciate your candor.  While I acknowledge my lack\nof industry experience, I would have no problem\nputting in needed time to gain a full knowledge of the\nunderlying products.  I'm not too proud or too old to\ndo my homework.\n\nI would welcome the opportunity to talk with one of\nyour associates in more depth and am available at your\nconvenience.  I plan to be in Houston September 25-27\nand have a pretty flexible schedule.  I can be reached\nby phone at 415.776.3035 or 312.286.8977.\n\nThanks again for your feedback.\n\nBest Regards,\n\nAlex Pritchartt\n\n\n\n\n--- John.J.Lavorato@enron.com wrote:\n> Hi\n>\n> You have great experience trading.  We certainly\n> need traders but you would\n> need to spend a lot of time learning the industry.\n> If you are up for this\n> and up for moving to Houston I will have someone do\n> a phone interview with\n> you.\n>\n> Thanks\n>\n> John Lavorato\n>\n>     -----Original Message-----\n>    From:   Alex Pritchartt\n> <alex_pritchartt@yahoo.com>@ENRON\n>\n>\n[mailto:IMCEANOTES-Alex+20Pritchartt+20+3Calex+5Fpritchartt+40yahoo+2Ecom+3E+40ENRON@ENRON.com]\n>\n>\n>    Sent:   Sunday, August 26, 2001 10:52 PM\n>    To:     Lavorato, John\n>    Cc:     bill mcilwain\n>    Subject:  friend of Bill McIlwain\n>\n>    Dear John,\n>\n>    My friend, Bill McIlwain, suggested that I write\n> you\n>    in an effort to find out more about trading\n>    opportunities in the energy field and more\n>    specifically at Enron.\n>\n>    I have ten years experience in the trading\n> business\n>    primarily trading listed options on futures and\n>    stocks.  I have traded both proprietary positions\n> and\n>    individual accounts as well as providing risk\n>    management control for other traders in a\n> corporate\n>    environment.\n>\n>    I have attached a copy of my resume for your\n> review.\n>    I would appreciate the chance to talk with you at\n> your\n>    convenience about opportunities with Enron and\n> the\n>    overall energy market.  I can be reached by\n>    email(alex_pritchartt@yahoo.com), phone\n> (415.776.3035\n>    or 312.286.8977), or fax (415.771.9035).\n>\n>    Thank you in advance for your consideration.\n>\n>    Best Regards,\n>\n>    Alex Pritchartt\n>\n>    =====\n>    Alex Pritchartt\n>    3725 Divisadero St.\n>    San Francisco, CA 94123\n>    415/776-3035 (home)\n>    415/771-9035 (fax)\n>    312/286-8977 (mobile)\n>\n>\n> __________________________________________________\n>    Do You Yahoo!?\n>    Make international calls for as low as\n> $.04/minute with Yahoo! Messenger\n>    http://phonecard.yahoo.com/\n>     - alex_pritchartt_resume.doc << File:\n> alex_pritchartt_resume.doc >>\n>\n>\n>\n>\n**********************************************************************\n> This e-mail is the property of Enron Corp. and/or\n> its relevant affiliate and may contain confidential\n> and privileged material for the sole use of the\n> intended recipient (s). Any review, use,\n> distribution or disclosure by others is strictly\n> prohibited. If you are not the intended recipient\n> (or authorized to receive for the recipient), please\n> contact the sender or reply to Enron Corp. at\n> enron.messaging.administration@enron.com and delete\n> all copies of the message. This e-mail (and any\n> attachments hereto) are not intended to be an offer\n> (or an acceptance) and do not create or evidence a\n> binding and enforceable contract between Enron Corp.\n> (or any of its affiliates) and the intended\n> recipient or any other party, and may not be relied\n> on by anyone as the basis of a contract by estoppel\n> or otherwise. Thank you.\n>\n**********************************************************************\n\n\n=====\nAlex Pritchartt\n3725 Divisadero St.\nSan Francisco, CA 94123\n415/776-3035 (home)\n415/771-9035 (fax)\n312/286-8977 (mobile)\n\n__________________________________________________\nDo You Yahoo!?\nGet email alerts & NEW webcam video instant messaging with Yahoo! Messenger\nhttp://im.yahoo.com"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "46",
                "hour": "22",
                "month": "10",
                "day": "16"
            },
            "text": {
                "text": "you got robbed...\n\n-35\n\n -----Original Message-----\nFrom: \tLavorato, John  \nSent:\tMonday, October 15, 2001 2:25 PM\nTo:\tArnold, John\nSubject:\t\n\ncurrent 185\n\n200 over 37 dallas/wash"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "11",
                "hour": "12",
                "month": "10",
                "day": "22"
            },
            "text": {
                "text": "3-5\n\n-----Original Message-----\nFrom: Lavorato, John \nSent: Sunday, October 21, 2001 2:30 PM\nTo: Arnold, John\nSubject: \n\n\nDENVER -3\nARIZ +2.5\nMINN +3.5\nPHILI +9 UNDER 41.5 TEASE\n \nALL 150"
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "36",
                "hour": "19",
                "month": "10",
                "day": "25"
            },
            "text": {
                "text": "spinnaker, one of fred's customer's , unwound a hedge today because they dont want exposure to us."
            }
        },
        {
            "group": "john.arnold@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "53",
                "hour": "18",
                "month": "10",
                "day": "27"
            },
            "text": {
                "text": "cancel?\n\n -----Original Message-----\nFrom: \tBuckley, Karen  \nSent:\tFriday, October 26, 2001 1:20 PM\nTo:\tAllen, Phillip K.; Arnold, John; Arora, Harry; Benson, Robert; Brawner, Sandra F.; Carson, Mike; Cuilla, Martin; Davis, Mark Dana; Ermis, Frank; Forney, John M.; Gilbert-smith, Doug; Grigsby, Mike; Holst, Keith; Lewis, Andrew H.; Maggi, Mike; Martin, Thomas A.; May, Larry; Mckay, Brad; Mckay, Jonathan; Neal, Scott; Presto, Kevin M.; Schwieger, Jim; Shively, Hunter S.; Storey, Geoff; Sturm, Fletcher J.; Suarez, John; Zipper, Andy\nCc:\tLavorato, John; Engler, Adrianne; Solis, Felicia\nSubject:\tReminder:Interivews Thursday Trading Track\n\n\nAll\n\nA reminder that you are scheduled to interview for the Trading Track Thursday,  November 1st, from 2.00 pm onwards.   Resumes and schedules will be forwarded to you shortly.\n\nRegards,\n\nKaren Buckley"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "36",
                "hour": "13",
                "month": "10",
                "day": "28"
            },
            "text": {
                "text": "current -260\nall 150\n \njack +7\nminn +3\ncinci+3\nsf+2.5\nnew orleans +12\ncar +2.5\ndall +3\noak +1.5\nnew eng +7\nbuff +7\nseattle +2.5\nwash +8"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "52",
                "hour": "2",
                "month": "10",
                "day": "29"
            },
            "text": {
                "text": "8-4 540-260=280 current"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "47",
                "hour": "21",
                "month": "10",
                "day": "29"
            },
            "text": {
                "text": "tenn+3 200"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "49",
                "hour": "16",
                "month": "11",
                "day": "18"
            },
            "text": {
                "text": "I need to give you a task.  Figure out what I lost last week.\n \nAlso, why don't we have the rest of month henry hub swap up on weekends.\n \nthis week\n \n150 each\n \nindi +5.5\njets +5.5\nphili -7\nseattle -3.5\ntenn +2\nsd +9\njack +5.5 -----> 250\nst louis -8 \nst louis/ne england over 46.5"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "26",
                "hour": "14",
                "month": "11",
                "day": "22"
            },
            "text": {
                "text": "gb -7 200\ndenver -7 200"
            }
        },
        {
            "group": "john.lavorato@enron.com",
            "start_date": {
                "year": "2001",
                "minute": "10",
                "hour": "0",
                "month": "11",
                "day": "27"
            },
            "text": {
                "text": "tb + 9.5 for 250"
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