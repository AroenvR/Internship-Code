import javassist.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.BasePathAwareController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.ExecutionException;

@BasePathAwareController
public class SearchController {
    private final Logger logger = LoggerFactory.getLogger(SearchController.class);

    private final SearchService searchService;

    @Autowired
    public SearchController(SearchService searchService) {
        this.searchService = searchService;
    }

    /**
     * Look at SearchService -> getInfoForDomain for more info.
     * @param domainName Domain the frontend user is searching for.
     * @return either HTTPStatus code 200, 404 or 500. If 200, the response body contains the domain info.
     */
    @GetMapping("/find-visits/{domainName}") // Example: find-visits/abc.be/?page=1
    public ResponseEntity<?> getPageForDomainByName(@PathVariable String domainName, @RequestParam(name = "page") int pageNumber) {
        logger.debug("GET was called for: {} - at page: {}", domainName, pageNumber);

        try {
            return ResponseEntity.status(HttpStatus.OK).body(searchService.getPageForDomain(domainName, pageNumber));
        } catch (NotFoundException ex) {
            logger.debug(ex.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
        } catch (ExecutionException | InterruptedException ex) {
            logger.error("Something wrong happened: {}", ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("");
        }
    }
}
