package xyz.neoul.papyrus.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan("xyz.neoul.papyrus.*")
@SpringBootApplication
public class PapyrusApplication {

	public static void main(String[] args) {
		SpringApplication.run(PapyrusApplication.class, args);
	}

}
