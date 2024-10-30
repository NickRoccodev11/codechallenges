import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public class Main {

  
    public static void main(String[] args) {

        List<Employee> employees = new ArrayList<>(List.of(
                new Employee("Alice", "IT", 5, 90, 70000),
                new Employee("Bob", "HR", 2, 85, 50000),
                new Employee("Charlie", "Sales", 4, 78, 60000),
                new Employee("Diana", "IT", 6, 92, 75000),
                new Employee("Eve", "HR", 3, 80, 54000),
                new Employee("Frank", "Sales", 5, 82, 61000)
        ));

        employees.sort((e1, e2) -> {
            if (e1.getYearsOfExperience() > e2.getYearsOfExperience()) {
                return -1;
            } else if (e1.getYearsOfExperience() < e2.getYearsOfExperience()) {
                return 1;
            } else {
                if (e1.getPerformanceScore() > e2.getPerformanceScore()) {
                    return -1;
                } else if (e1.getPerformanceScore() < e2.getPerformanceScore()) {
                    return 1;
                } else {
                    return e1.getName().compareTo(e2.getName());
                }
            }
        });

        System.out.println("Employees eligible for promotion are:");

        List<Employee> eligibleEmployees = employees.stream()
                .filter(emp -> {
                    return (emp.getYearsOfExperience() >= 3) &&
                            (emp.getPerformanceScore() >= 80);
                })
                .toList();
        for (Employee e : eligibleEmployees) {
            System.out.println(e.toString());
        }

        List<Employee> hrEmps = employees.stream()
                .filter(emp -> {
                    return emp.getDepartment().equals("HR");
                })
                .toList();
        List<Employee> itEmps = employees.stream()
                .filter(emp -> {
                    return emp.getDepartment().equals("IT");
                })
                .toList();
        List<Employee> salesEmps = employees.stream()
                .filter(emp -> {
                    return emp.getDepartment().equals("Sales");
                })
                .toList();
        List<List<Employee>> departments = new ArrayList<>();
        departments.add(hrEmps);
        departments.add(itEmps);
        departments.add(salesEmps);

        for (List<Employee> list : departments) {
            String bestPerformer = "nobody";
            int bestScore = 0;
            String dept= "N/A";
            for (Employee emp : list) {
                if(emp.getPerformanceScore() > bestScore){
                    bestScore = emp.getPerformanceScore();
                    bestPerformer = emp.getName();
                    dept = emp.getDepartment();
                }

            }
            System.out.println("for the " + dept+ "  department, " + bestPerformer + " is the top performer with a score of " + bestScore + "!");
        }

    }

}