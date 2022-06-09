import lombok.Data;

import java.time.ZonedDateTime;
import java.util.UUID;

@Data
public class SearchDTO {

    private UUID visitId;
    private ZonedDateTime requestTimeStamp;
    private CrawlComponentStatus crawlStatus;
    private String domainName;
    private String screenshotKey;

}
