package phaser.example.phaserApi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import phaser.example.phaserApi.entity.Score;
import phaser.example.phaserApi.service.ScoreService;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class ScoreController {

	@Autowired
	private ScoreService scoreService;
	
	@GetMapping("/points")
	public int getPoints() {
		return scoreService.findPoints();
	}
	
	@PostMapping("/points")
	public ResponseEntity<Boolean> addPoints(@RequestBody Score score){
		return scoreService.addPoints(score);
	}
	
}
