package phaser.example.phaserApi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import phaser.example.phaserApi.entity.Score;
import phaser.example.phaserApi.repository.ScoreRepository;

@Service
public class ScoreService {
	
	private ScoreRepository scoreRepository;
	
	@Autowired
	public void setScoreRepository(ScoreRepository scoreRepository) {
		this.scoreRepository = scoreRepository;
	}
	
	public int findPoints() {
		return scoreRepository.findPoints();
	}
	
	public ResponseEntity<Boolean> addPoints(Score score){
		scoreRepository.save(score);
		return new ResponseEntity<Boolean>(HttpStatus.CREATED);
	}

}
