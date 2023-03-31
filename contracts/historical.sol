
//The following code creates a new filter for the Appraisal event in the ArtRegistry 
//contract that finds all the events in the chain for a specified token ID:

filter = contract.events.Appraisal.createFilter(
    fromBlock=0,
    argument_filters={"tokenId": token_id}
)

//The following code gets all the appraisal events, loops through those events, 
//converts each appraisal to a Python dictionary, and then prints the appraisal data:

appraisals = filter.get_all_entries()
for appraisal in appraisals:
    print(dict(appraisal))


//The following code thus prints the appraisal amount and the report URI that were passed to the event:

appraisals = filter.get_all_entries()
for appraisal in appraisals:
    report_dictionary = dict(appraisal)
    print(report_dictionary)
    print(report_dictionary["args"])

