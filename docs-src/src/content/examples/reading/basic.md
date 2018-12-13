# Basic Reading

If your header names match your property names, you can read a CSV file without any configuration.

###### Data
```
Id,Name
1,one
2,two
```

###### Example
```cs
void Main()
{
	using (var reader = new StreamReader("path\\to\\file.csv"))
	using (var csv = new CsvReader(reader))
	{
		var records = csv.GetRecords<Foo>();
	}
}

public class Foo
{
	public int Id { get; set; }
	public string Name { get; set; }
}
```