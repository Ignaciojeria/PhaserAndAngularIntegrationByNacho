package phaser.example.phaserApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import phaser.example.phaserApi.entity.Score;

@Repository
public interface ScoreRepository extends JpaRepository<Score,Integer> {
	
	@Query("SELECT points FROM Score where id=1")
	int findPoints();
}
