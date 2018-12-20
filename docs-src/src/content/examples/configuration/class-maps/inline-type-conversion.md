# Inline Type Conversion

If you don't want to write a full `ITypeConverter` implementation, you can specify a function that will do the same thing.

#### Reading

###### Data

```
Id,Name,Json
1,one,"{ ""Foo"": ""Bar"" }"
```

###### Example

```cs
void Main()
{
    using (var reader = new StreamReader("path\\to\\file.csv"))
    using (var csv = new CsvReader(reader))
    {
        csv.Configuration.RegisterClassMap<FooMap>();
        csv.GetRecords<Foo>().ToList().Dump();
    }
}

public class Foo
{
    public int Id { get; set; }
    public string Name { get; set; }
    public Json Json { get; set; }
}

public class Json
{
    public string Foo { get; set; }
}

public class FooMap : ClassMap<Foo>
{
    public FooMap()
    {
        Map(m => m.Id);
        Map(m => m.Name);
        Map(m => m.Json).ConvertUsing(row => JsonConvert.DeserializeObject<Json>(row.GetField("Json")));
    }
}
```

#### Writing

###### Data

###### Example
