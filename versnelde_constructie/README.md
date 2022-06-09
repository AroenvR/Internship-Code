De code dat ik heb geschreven voor de 'Timeline table' te versnellen.

De dataflow is van database Repositories naar SearchService en dan naar via de SearchController naar de frontend.
SearchDTO's worden gebruikt door PageDTO's en PageDTO wordt gebruikt door SearchService.

Voor de veiligheid heb ik alle interne imports / packages verwijderd uit de files.