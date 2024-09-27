import java.util.*;

class Program {
  public String tournamentWinner(
      ArrayList<ArrayList<String>> competitions, ArrayList<Integer> results) {
    Map<String, Integer> teamScores = new HashMap<>();
    for (int i = 0; i < competitions.size(); i++) {
      String winner;
      if (results.get(i) == 1) {
        winner = competitions.get(i).get(0);
      } else {
        winner = competitions.get(i).get(1);
      }
      teamScores.put(winner, teamScores.getOrDefault(winner, 0) + 1);
    }
    int highestScore = 0;
    String winningTeam = null;
    for (Map.Entry<String, Integer> entry : teamScores.entrySet()) {
      int score = entry.getValue();
      String team = entry.getKey();
      if (score > highestScore) {
        highestScore = score;
        winningTeam = team;
      }
    }
    return winningTeam;
  }
}