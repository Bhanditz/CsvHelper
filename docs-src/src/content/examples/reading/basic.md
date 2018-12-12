# Basic Reading

If your header names match your property names, you can read a CSV file without any configuration.

basic.csv
```
Id,Name
1,one
2,two
```

Basic.cs
```cs
public class Basic
{
	public int Id { get; set; }
	public string Name { get; set; }
}
```

example
```cs
using (var reader = new StreamReader("basic.csv"))
using (var csv = new CsvReader(reader))
{
	var records = csv.GetRecords<Basic>();
}
```

```cs
void Main()
{
	using (var reader = new StreamReader("basic.cs"))
	using (var csv = new CsvReader(reader))
	{
		csv.GetRecords<Test>();
	}
}

public class Test
{
	public int Id { get; set; }
	public string Name { get; set; }
}
```