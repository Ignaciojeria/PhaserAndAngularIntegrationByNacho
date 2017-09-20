package phaser.example.phaserApi.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Score {
	
	@Id
	@Column(name="id")
	private int id;
	
	@Column(name="points")
	private int points;

	public Score(){}

	public Score(int id, int points) {
		this.id = id;
		this.points = points;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}
	
	
	
	

}
